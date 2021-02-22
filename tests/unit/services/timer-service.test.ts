import chai from 'chai';

import {
    DependencyInjection,
    TimerService,
    CONFIGURATION,
    DEFINITIONS,
    PromisifiedDelay
} from '../../../src';

const expect = chai.expect;

describe('TimerService - Class', () => {
    const di = new DependencyInjection({});
    const timer = di.get(DEFINITIONS.TIMER);
    const timerService = new TimerService(di);

    describe('should instantiate TimerService', () => {

        it('should output the methods', () => {
            expect(JSON.stringify(di.get(DEFINITIONS.TIMER).start)).to.eql(JSON.stringify(timerService.start));
            expect(JSON.stringify(di.get(DEFINITIONS.TIMER).stop)).to.eql(JSON.stringify(timerService.stop));
        });

        it('should start and stop the timer', function () {
            let duration;
            timer.start("test");
            new PromisifiedDelay()
                .delay(1000)
                .then(() => {
                    duration = timer.stop("test");
                    expect(duration).to.be.a('number');
                })
                .catch(() => {
                    expect(true).to.eql(false);
                })
        });
    })
})
