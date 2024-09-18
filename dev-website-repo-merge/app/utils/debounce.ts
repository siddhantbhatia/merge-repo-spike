export function debounce<T extends (...args: any) => ReturnType<T>>(
  func: T,
  wait: number = 300
) {
  let timeoutID: ReturnType<typeof setTimeout> | undefined = undefined;

  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timeoutID);

    timeoutID = setTimeout(() => {
      timeoutID = undefined;
      func.apply(this, args);
    }, wait);
  };
}
