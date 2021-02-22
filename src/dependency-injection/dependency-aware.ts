import DependencyInjection from "./dependency-injection";
import Config, { DEPENDENCIES, DEFINITIONS } from '../config/dependencies';

export default class DependencyAware {
    di: DependencyInjection;

    constructor(di: DependencyInjection) {
        this.di = di;
    }

    getContainer = (): DependencyInjection => {
        return this.di;
    }
}
