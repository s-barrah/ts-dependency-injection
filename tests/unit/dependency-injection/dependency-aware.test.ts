import chai from 'chai';

import { DependencyAware, DependencyInjection } from "../../../src";

const expect = chai.expect;

describe('DependencyAware - Class', () => {

    const dependencyInjectionClass = new DependencyInjection({});
    const dependencyAwareClass = new DependencyAware(dependencyInjectionClass);

    it('should instantiate and be able to get the dependency injection container', () => {
        expect(dependencyAwareClass.getContainer()).to.eql(dependencyInjectionClass);
    });
});
