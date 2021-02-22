import DependencyAware from "../dependency-injection/dependency-aware";
import PromisifiedDelay from "../utils/promisified-delay";

import Config from "../config/dependencies";

export default class MailService extends DependencyAware {
  /**
   * Sends Mail
   */
  sendMail(): Promise<string> {
    const definitions = new Config().getDefinitions();
    const timerId = "send_mail";
    return new Promise((resolve, reject) => {
      this.getContainer().get(definitions.TIMER).start(timerId);
      new PromisifiedDelay()
        .delay(1000)
        .then(() => {
          this.getContainer().get(definitions.TIMER).stop(timerId);
          resolve("Mail Sent!");
        })
        .catch((error: unknown) => {
          reject(error);
        });
    });
  }
}
