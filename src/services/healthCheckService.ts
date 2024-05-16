import { Request, Response } from "express"
import logger from "../utils/logger"
import { ResponseJsonModel } from "../models/model"

const getHealthCheck = async (_req: Request, res: Response) => {
    try {
        const responseJson: ResponseJsonModel = {
            message: "Health Check Successfully"
        }
        res.status(200).json(responseJson)
    } catch (error) {
        logger.error(error)
        const responseJson: ResponseJsonModel = {
            message: `Health Check Successfully: ${(error as Error).message
                }}`,
        }
        res.status(403).json(responseJson)
    }
}

const healthCheckService = {
    getHealthCheck
}

export default healthCheckService