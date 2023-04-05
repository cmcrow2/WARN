import cron from 'node-cron'
import axios from 'axios'

// runs a cronjob everyday that pulls data from data.texas.gov
export const warnCron = () => {
  // use node-cron package to setup a job that runs (currently for testing) every minute
  cron.schedule('*/1 * * * *', () => {
    // use axios package to make a GET request to data.texas.gov for all companies that gave a WARN notice during Jan 2023
    axios.get('https://data.texas.gov/resource/8w53-c4f6.json?$where=notice_date between \'2023-01-01T12:00:00\' and \'2023-02-01T14:00:00\'')
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  })
}
