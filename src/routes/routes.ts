import express from 'express'
import healthCheckRoute from './healthCheckRoute'
import logger from '../utils/logger'

const routes = express.Router()

routes.use((req, _res, next) => {
    logger.info(req.path, { method: req.method })
    next()
})

routes.use("/healthCheck", healthCheckRoute)

export default routes