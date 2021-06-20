export class Roll{
  public static create(){
    return new Roll();
  }

  public pins(maxNumber: number){
    return Math.floor(Math.random() * (1 + maxNumber - 0) + 0);
  }
}