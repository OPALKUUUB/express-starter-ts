import express, { Application } from 'express'
import cors from 'cors'
import routes from './routes/routes'
import logger from './utils/logger'

require("dotenv").config()
const PORT = process.env.PORT || 8080

const app: Application = express()

app.use(cors({ origin: ["*"] }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', routes)

try {
    app.listen(PORT, (): void => {
        logger.info(`Connected successfully on port ${PORT}`)
    })
} catch (error) {
    logger.error(`Error occured: ${(error as Error).message}`)
}