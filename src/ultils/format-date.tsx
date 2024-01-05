import { format } from 'date-fns';

export const formatDate = (date: string) => {
  return format(Date.parse(date), 'MM/dd/yyyy');
};
