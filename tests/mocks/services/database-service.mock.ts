import {
    DependencyInjection,
    DependencyAware,
    PromisifiedDelay,
    DEFINITIONS
} from "../../../src";


export default class DatabaseServiceMock extends DependencyAware {
    constructor(di: DependencyInjection) {
        super(di);
    }

    /**
     * Connect DB
     */
    connect = (): Promise<string> => {
        return new Promise((resolve, reject) => {
            const timerId = 'db_connect';
            this.getContainer()
                .get(DEFINITIONS.TIMER)
                .start(timerId);
            return new PromisifiedDelay()
                .delay(1000)
                .then(() => {
                    this.getContainer()
                        .get(DEFINITIONS.TIMER)
                        .stop(timerId);
                    resolve("Connected");
                })
                .catch((error: unknown) => {
                    reject(error);
                })
        });

    }

}
