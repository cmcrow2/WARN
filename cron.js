import cron from 'node-cron'
import axios from 'axios'

export const warnCron = () => {
  cron.schedule('*/1 * * * *', () => {
    axios.get('https://data.texas.gov/resource/8w53-c4f6.json?$where=notice_date between \'2023-01-01T12:00:00\' and \'2023-02-01T14:00:00\'')
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  })
}
