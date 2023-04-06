import express from 'express'
import { warnCron } from './warn-notify/cron.js'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
const port = 3000

// tells the app where the server is hosted
app.listen(port, () => {
  // on startup, run the warnCron() function
  warnCron()
})
