function allEqual(arr: string[]): boolean {
  return arr.every((v) => v === arr[0]);
}

export { allEqual };
