// Config
import { DEPENDENCIES, DEFINITIONS } from "../config/dependencies";

// Types
import { IGeneric } from "../types/generic";

type ConfigType = IGeneric<any>;

export default class DependencyInjection {
  private dependencies: IGeneric<any>;

  private configuration: ConfigType;

  constructor(configuration: ConfigType) {
    this.dependencies = {};
    this.configuration = configuration;
    this.register(configuration);
  }

  /**
   * Register Dependencies
   * @return {*}
   */
  register = (configuration: ConfigType) => {
    // Iterate over dependencies and add to container
    Object.keys(DEFINITIONS).forEach((dependencyKey) => {
      this.dependencies[dependencyKey] = new DEPENDENCIES[dependencyKey](this);
    });

    // Iterate over child dependencies and add to container
    if (typeof configuration.DEPENDENCIES !== "undefined") {
      Object.keys(configuration.DEPENDENCIES).forEach((dependencyKey) => {
        this.dependencies[dependencyKey] = new configuration.DEPENDENCIES[
          dependencyKey
        ](this);
      });
    }
  };

  /**
   * Get Dependency
   * @param definition
   * @return {*}
   */
  get = (definition: string) => {
    if (!this.dependencies[definition]) {
      throw Error(`${definition} does not exist in di container`);
    }
    return this.dependencies[definition];
  };

  /**
   * Get Configuration
   * @param configType
   * @return {*}
   */
  getConfiguration = (configType: string) => {
    if (configType && !this.configuration[configType]) {
      return null;
    }
    return this.configuration[configType] || this.configuration;
  };
}
