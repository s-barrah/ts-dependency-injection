import DependencyAware from "../dependency-injection/dependency-aware";
import DependencyInjection from "../dependency-injection/dependency-injection";

import Config from "../config/dependencies";

type Timer = { [index: string]: number };

export default class TimerService extends DependencyAware {
  private timers: Timer;

  constructor(di: DependencyInjection) {
    super(di);
    this.timers = {};
  }

  /**
   * Start timer
   * @param identifier
   */
  start(identifier: string) {
    this.timers[identifier] = new Date().getTime();
  }

  /**
   * Stop timer
   * @param identifier
   */
  stop(identifier: string) {
    if (typeof this.timers[identifier] !== "undefined") {
      const duration = new Date().getTime() - this.timers[identifier];
      const definitions = new Config().getDefinitions();
      this.getContainer()
        .get(definitions.LOGGER)
        .info(`Timing - ${identifier} took ${duration}ms to complete`);
      return duration;
    }
  }
}
