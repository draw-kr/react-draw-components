import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import React, { useCallback } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

export interface ToastOpenInput extends SnackbarOrigin {
  durations?: number;
  message: string;
}

interface ToastProps extends ToastOpenInput {
  opened: boolean;
}

const Toast: React.FC<ToastProps> = ({
  vertical,
  horizontal,
  opened,
  message,
}) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical,
        horizontal,
      }}
      open={opened}
      message={message}
    />
  );
};

const toastsAtom = atom<ToastProps[]>({
  key: 'toastsAtom',
  default: [],
});

export const ToastProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const toasts = useRecoilValue(toastsAtom);
  return (
    <>
      {children}

      {toasts.map((toastProps, index) => (
        <Toast {...toastProps} key={`toast-${toastProps.message}-${index}`} />
      ))}
    </>
  );
};

export const useToast = () => {
  const setToasts = useSetRecoilState(toastsAtom);

  const add = useCallback(
    ({ durations = 3000, ...toast }: ToastOpenInput) => {
      setToasts((toasts) => [...toasts, { ...toast, opened: true }]);

      setTimeout(() => {
        setToasts((_toasts) => [
          ..._toasts.filter((_toast) => _toast != toast),
          { ...toast, opened: false },
        ]);
      }, durations);
    },
    [setToasts]
  );

  return { add };
};
