export default class PromisifiedDelay {
  delay = (timeInMs: number) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeInMs);
    });
  };
}
