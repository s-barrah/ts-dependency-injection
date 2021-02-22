import LoggerService from "../services/logger-service";
import TimerService from "../services/timer-service";
import MailService from "../services/mail-service";

type Definitions = { [index: string]: string };

export default class Config {
  private definitions: Definitions;

  constructor() {
    this.definitions = {
      LOGGER: "LOGGER",
      TIMER: "TIMER",
      MAIL: "MAIL",
    };
  }

  getDefinitions() {
    return this.definitions;
  }

  getDependencies() {
    return {
      [this.definitions.LOGGER]: LoggerService,
      [this.definitions.TIMER]: TimerService,
      [this.definitions.MAIL]: MailService,
    };
  }
}
