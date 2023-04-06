import cron from 'node-cron'
import axios from 'axios'
import {getWarnByDateRange} from './queries.js'

// runs a cronjob everyday that pulls data from data.texas.gov
export const warnCron = () => {
  // use node-cron package to setup a job that runs (currently for testing) every minute
  cron.schedule('*/1 * * * *', () => {
    // use axios package to make a GET request to data.texas.gov for all companies that gave a WARN notice during Jan 2023
    const query = getWarnByDateRange('2023-01-01T12:00:00', '2023-02-01T14:00:00')
    axios.get(query, {
      headers: {
        'X-App-Token': process.env.APP_TOKEN
      }
    })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  })
}