import { SyntheticEvent } from 'react'

import Alert, { AlertColor } from '@mui/material/Alert'
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar'

export type ToastProps = {
  autoHideDuration?: number
  severity?: AlertColor
  message?: string
  open: boolean
  anchorOrigin?: SnackbarOrigin
  handleClose?: (event?: SyntheticEvent | Event, reason?: string) => void
  id?: string
}

export const Toast = ({
  autoHideDuration = 3000,
  severity,
  message,
  open = false,
  anchorOrigin = { vertical: 'top', horizontal: 'center' },
  handleClose,
  id,
}: ToastProps) => {
  return (
    <Snackbar id={id} open={open} autoHideDuration={autoHideDuration} anchorOrigin={anchorOrigin}>
      <Alert onClose={handleClose} severity={severity} sx={{ width: '100%', whiteSpace: 'pre-line' }}>
        {message}
      </Alert>
    </Snackbar>
  )
}
