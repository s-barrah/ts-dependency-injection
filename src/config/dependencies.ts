import LoggerService from "../services/logger-service";
import TimerService from "../services/timer-service";
import MailService from "../services/mail-service";


import { IGeneric } from "../types/generic";

export const DEFINITIONS: IGeneric<string> = {
    LOGGER: 'LOGGER',
    TIMER: 'TIMER',
    MAIL: 'MAIL',
};

export const DEPENDENCIES: IGeneric<any> = {
    [DEFINITIONS.LOGGER]: LoggerService,
    [DEFINITIONS.TIMER]: TimerService,
    [DEFINITIONS.MAIL]: MailService,
};

export default {
    DEFINITIONS,
    DEPENDENCIES,
};
