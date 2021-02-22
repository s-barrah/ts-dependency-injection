import chai from 'chai';

import DependencyInjection from "../../../src/dependency-injection/dependency-injection";
import { DEFINITIONS } from "../../../src/config/dependencies";

import { TimerService, LoggerService, MailService} from '../../../src';

import DatabaseServiceMock from "../../mocks/services/database-service.mock";

const expect = chai.expect;

describe('DependencyInjection - Class', () => {
    describe('should instantiate class', () => {
        const configuration = {
            DEPENDENCIES: {
                DB: DatabaseServiceMock
            },
            QUEUES: {
                rabbit: "RabbitQueue"
            }
        };
        const dependencyInjection = new DependencyInjection(configuration);

        it('should output the configuration that was provided to it', () => {
            expect(dependencyInjection.getConfiguration("")).to.eql(configuration);
        });
    });

    describe('should get dependencies', () => {
        const dependencyInjection = new DependencyInjection({});

        it('Should throw validation errors when an non existent model is requested', () => {
            expect(() => dependencyInjection.get('test')).to.throw('test does not exist in di container');
        });

        it('should fetch an instance of the logger service', () => {
            expect(dependencyInjection.get(DEFINITIONS.LOGGER) instanceof LoggerService).to.be.true;
        });

        it('should fetch an instance of the timer service', () => {
            expect(dependencyInjection.get(DEFINITIONS.TIMER) instanceof TimerService).to.be.true;
        });

        it('should fetch an instance of the mail service', () => {
            expect(dependencyInjection.get(DEFINITIONS.MAIL) instanceof MailService).to.be.true;
        });
    });

    describe('should extend dependencies', () => {
        const configuration = {
            DEPENDENCIES: {
                DB: DatabaseServiceMock,
            }
        }
        const dependencyInjection = new DependencyInjection(configuration);


        it('should fetch an instance of the mail service', () => {
            expect(dependencyInjection.get('DB') instanceof DatabaseServiceMock).to.be.true;
        });

        it('should fetch an instance of the logger service', () => {
            expect(dependencyInjection.get(DEFINITIONS.LOGGER) instanceof LoggerService).to.be.true;
        });

        it('should fetch an instance of the timer service', () => {
            expect(dependencyInjection.get(DEFINITIONS.TIMER) instanceof TimerService).to.be.true;
        });

        it('should fetch an instance of the mail service', () => {
            expect(dependencyInjection.get(DEFINITIONS.MAIL) instanceof MailService).to.be.true;
        });
    })
})
