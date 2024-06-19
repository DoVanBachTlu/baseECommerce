import {format} from 'date-fns';

export const formatTime = (config: {
  date: Date | number;
  formatStr?: string;
}) => {
  try {
    return format(config.date, config.formatStr || 'yyyy-MM-dd HH:mm:SSS');
  } catch (error) {
    return `${config.date}`;
  }
};
