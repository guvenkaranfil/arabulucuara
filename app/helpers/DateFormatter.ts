import moment from 'moment';
import 'moment/locale/tr';

function getMonthAndDayName(date: Date): {day: number; month: string} {
  return {day: Number(moment(date).format('DD')), month: moment(date).format('MMMM')};
}

function getHourAndMinute(date: Date): string {
  return moment(date).format('hh:mm');
}

function getAnalogDate(date: Date): string {
  return moment(date).format('D.M.YYYY');
}

export {getMonthAndDayName, getHourAndMinute, getAnalogDate};
