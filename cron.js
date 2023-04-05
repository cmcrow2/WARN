import cron from 'node-cron'
import axios from 'axios'

export const warnCron = () => {
  cron.schedule('*/1 * * * *', () => {
    axios.get('https://data.texas.gov/resource/8w53-c4f6.json')
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  })
}
