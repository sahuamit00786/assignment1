import { Config } from "./config";
import app from "./config/app";
import logger from "./config/logger";

const startServer = ()=>{
    try {
        app.listen(Config.PORT,()=>{
        logger.info(`Server running on port ${Config.PORT}`)
    })
    } catch (error) {
        logger.error(`Failed to listen on port ${Config.PORT}`)
        process.exit(1)
    }
}

startServer()