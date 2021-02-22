// Config
import Config from "../config/dependencies";

// Types
type Generic<T> = {
  [index in string | number | any]: T;
};

interface IConfig {
  [index: string]: Generic<any>;
}

export default class DependencyInjection {
  private dependencies: IConfig;

  private configuration: IConfig;

  constructor(configuration: IConfig) {
    this.dependencies = {};
    this.configuration = configuration;
    this.register(configuration);
  }

  /**
   * Register Dependencies
   * @return {*}
   */
  register = (configuration: IConfig) => {
    const config = new Config();
    const definitions = config.getDefinitions();
    const dependencies = config.getDependencies();
    // Iterate over dependencies and add to container
    Object.keys(definitions).forEach((dependencyKey) => {
      this.dependencies[dependencyKey] = new dependencies[dependencyKey](this);
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
