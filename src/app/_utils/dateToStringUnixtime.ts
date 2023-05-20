import { DateRangePickerValue } from '@tremor/react';

export function dateToStringUnixtime(
  value: DateRangePickerValue | undefined,
  type: 'before' | 'after'
): string {
  if (type === 'before') {
    return value != null && value[1] != null
      ? Math.floor(value[1].getTime() / 1000).toString()
      : '';
  } else {
    return value != null && value[0] != null
      ? Math.floor(value[0].getTime() / 1000).toString()
      : '';
  }
}
