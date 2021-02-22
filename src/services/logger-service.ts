import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.Console()],
});

export default class LoggerService {
  /**
   * Log Error Message
   * @param error
   * @param message string
   */
  error(error: object, message = ""): void {
    logger.log("error", message, { error });
  }

  /**
   * Log Information Message
   * @param message string
   */
  info(message: string): void {
    logger.log("info", message);
  }
}
