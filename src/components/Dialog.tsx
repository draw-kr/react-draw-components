import Button from '@mui/material/Button';
import MuiDialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useCallback, useState } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

export interface DialogOpenInput {
  title: string;
  description: string;
  leftButtonText: string;
  rightButtonText: string;
  onClickLeftButton(): unknown;
  onClickRightButton(): unknown;
}

interface DialogOpenState extends DialogOpenInput {
  opened: boolean;
  close(): unknown;
}

interface DialogOpenStateWithId extends DialogOpenState {
  id: string;
}

const Dialog: React.FC<DialogOpenState> = ({
  opened,
  close,
  title,
  description,
  leftButtonText,
  onClickLeftButton,
  rightButtonText,
  onClickRightButton,
}) => {
  const [identifier] = useState(Math.random().toString());

  return (
    <MuiDialog
      open={opened}
      onClose={close}
      aria-labelledby={`alert-dialog-title-${identifier}`}
      aria-describedby={`alert-dialog-description-${identifier}`}
    >
      <DialogTitle id={'alert-dialog-title-' + identifier}>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id={`alert-dialog-description-${identifier}`}>
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClickLeftButton}>{leftButtonText}</Button>
        <Button onClick={onClickRightButton}>{rightButtonText}</Button>
      </DialogActions>
    </MuiDialog>
  );
};

const dialogsAtom = atom<DialogOpenStateWithId[]>({
  key: 'dialogs',
  default: [],
});

export const DialogProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const dialogs = useRecoilValue(dialogsAtom);

  return (
    <>
      {children}

      {dialogs.map(({ id, ...dialogProps }, index) => (
        <Dialog
          {...dialogProps}
          key={`dialog-${dialogProps.title}-${id}-${index}`}
        />
      ))}
    </>
  );
};

export function useDialog() {
  const _setDialogs = useSetRecoilState(dialogsAtom);

  const close = useCallback(
    (id: string) => {
      _setDialogs((dialogs) => {
        const dialog = dialogs.find((dialog) => dialog.id == id);

        if (!dialog) {
          console.warn(`id가 ${id}인 다이얼로그 찾을 수 없음.`);
          return dialogs;
        }

        return [
          ...dialogs.filter((_dialog) => _dialog.id != id),
          { ...dialog, opened: false },
        ];
      });
    },
    [_setDialogs]
  );

  const add = useCallback(
    (dialog: DialogOpenInput) => {
      const id = Math.random().toString();

      _setDialogs((dialogs) => [
        ...dialogs,
        {
          ...dialog,
          id,
          opened: true,
          close: () => close(id),
        },
      ]);
      return id;
    },
    [close]
  );

  return { add, close };
}
