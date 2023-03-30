import { MatSnackBarConfig } from '@angular/material/snack-bar';

export const SNACK_BAR_DURATION = 3000;
export const SPINNER_SET_TIMEOUT_DURATION = 300;
export const SNACK_BAR_OPTIONS = {
  duration: SNACK_BAR_DURATION,
  horizontalPosition: 'right',
  verticalPosition: 'top',
} as MatSnackBarConfig;
