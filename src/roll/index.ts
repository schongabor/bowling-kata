export class Roll{
  public static create(){
    return new Roll();
  }

  public pins(remainingNumberOfPins: number): number{
    return Math.floor(Math.random() * (1 + remainingNumberOfPins - 0) + 0);
  }
}