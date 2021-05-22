import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmationDialogComponent } from '../_dialogs/confirmation-dialog/confirmation-dialog.component';

export function confirmDialog(
  dialog: MatDialog,
  title: string,
  message: string,
  yesText: string,
  noText: string
): Observable<boolean> {
  const data: ConfirmationDialogData = {
    title: title,
    noText: noText,
    yesText: yesText,
    questionInHtml: message,
    includesInput: false
  };
  return dialog
    .open(ConfirmationDialogComponent, {
      width: '400px',
      data: data,
      disableClose: true
    })
    .afterClosed();
}

export interface ConfirmationDialogData {
  title: string;
  questionInHtml: string;
  noText: string;
  yesText: string;
  includesInput: boolean;
  value?: string;
}

/**
 * Sanitize an object from null, undefined & empty props. When 0, no props are deleted.
 * @param obj Object
 *
 * @usageNotes :
 *
 * ### Example
 *
 * ```ts
 * const myObj = { key1: null, key2: value2, key3: undefined, key4: '' };
 * const mySanitizedObj = objectNullValueSanitizer(myObj)
 *
 * console.log(mySanitizedObj);   // {key2: value2}
 * ```
 */
export function objectNullValueSanitizer(obj: any) {
  if (!obj) {
    return undefined;
  }
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (
        (obj[key] !== 0 && !obj[key]) ||
        (typeof obj[key] === 'object' && !Boolean(obj[key])) ||
        (Array.isArray(obj[key]) && obj[key].length === 0)
      ) {
        delete obj[key];
      }
    }
  }
  if (JSON.stringify(obj) == '{}') {
    return undefined;
  }
  return obj;
}
