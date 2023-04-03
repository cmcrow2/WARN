import cron from "node-cron"

export const warnCron = () => {
    cron.schedule('*/1 * * * *', () => {
        console.log('running a task every minute');
    });
}