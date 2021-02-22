import DependencyInjection from "./dependency-injection";

export default class DependencyAware {
  private di: DependencyInjection;

  constructor(di: DependencyInjection) {
    this.di = di;
  }

  getContainer = (): DependencyInjection => {
    return this.di;
  };
}
