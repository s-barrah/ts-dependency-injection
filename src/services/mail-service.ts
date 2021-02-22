import DependencyAware from "../dependency-injection/dependency-aware";
import PromisifiedDelay from "../utils/promisified-delay";

import { DEFINITIONS } from "..";


export default class MailService extends DependencyAware {

    /**
     * Sends Mail
     */
    sendMail(): Promise<string> {
        const timerId = 'send_mail'
        return new Promise((resolve, reject) => {
            this.getContainer()
                .get(DEFINITIONS.TIMER)
                .start(timerId);
            new PromisifiedDelay()
                .delay(1000)
                .then(() => {
                    this.getContainer()
                        .get(DEFINITIONS.TIMER)
                        .stop(timerId);
                    resolve('Mail Sent!')
                })
                .catch((error: unknown) => {
                    reject(error);
                })
        });

    }
}
