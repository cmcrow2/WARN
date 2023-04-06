// gets WARN notices for Texas for a given time frame
export const getWarnByDateRange = (startDate, endDate) => {
  return `${process.env.TEXAS_URL}$where=notice_date between '${startDate}' and '${endDate}'`
}
