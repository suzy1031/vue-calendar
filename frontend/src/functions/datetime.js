import { format, addHours } from 'date-fns';

export const getTimeIntervalList = () => {
  // 15分間隔の時間のリストを返す
  const hours = [...Array(24)].map((_, i) => ('0' + i).slice(-2));
  const minutes = ['00', '15', '30', '45'];
  const timeList = hours
    .map((hour) => minutes.map((minute) => hour + ':' + minute))
    .flat();
  return timeList;
};

export const getDefaultStartAndEnd = (date) => {
  const currentTime = format(new Date(), 'HH:mm:ss');
  const dateTime = new Date(`${date} ${currentTime}`);
  const start = format(addHours(dateTime, 1), 'yyyy/MM/dd HH:00:00');
  const end = format(addHours(dateTime, 2), 'yyyy/MM/dd HH:00:00');
  return [start, end];
};

export const isGreaterEndThanStart = (
  startDate,
  startTime,
  endDate,
  endTime,
  allDay,
) => {
  // 終了日時が開始日時の後になっているか
  if (allDay) {
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    return end >= start;
  } else {
    const start = new Date(`${startDate} ${startTime}`).getTime();
    const end = new Date(`${endDate} ${endTime}`).getTime();
    return end > start;
  }
};
