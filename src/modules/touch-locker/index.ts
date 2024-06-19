export default class TouchLocker {
  private static instance: TouchLocker | null = null;
  private locked: boolean = false;

  private constructor() {}

  public static getInstance(): TouchLocker {
    if (!TouchLocker.instance) {
      TouchLocker.instance = new TouchLocker();
    }
    return TouchLocker.instance;
  }

  public isLocked(): boolean {
    return this.locked;
  }

  public setLock(): void {
    this.locked = true;
    setTimeout(() => {
      this.locked = false;
    }, 100);
  }
}
