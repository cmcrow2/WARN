// import cron from 'node-cron'
import axios from 'axios'
import { getWarnByDateRange } from './queries.js'
import moment from 'moment'

// runs a cronjob everyday that pulls data from data.texas.gov
export const warnCron = () => {
  // initialize date and query variables
  const startDate = '2023-01-01T00:00:00'
  const endDate = moment().format("YYYY-MM-DDT00:00:00")
  const query = getWarnByDateRange(startDate, endDate)
  
  // use axios package to make a GET request to data.texas.gov for all companies that gave a WARN notice in 2023
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

  // currently, disable cron job until ready for schedule testing
  // cron.schedule('*/1 * * * *', () => {
  // })
}