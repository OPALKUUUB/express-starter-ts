import express from 'express'
import healthCheckService from '../services/healthCheckService'

const healthCheckRoute = express.Router()

healthCheckRoute.get('', healthCheckService.getHealthCheck)

export default healthCheckRoute