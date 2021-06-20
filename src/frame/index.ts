import { Roll } from '../roll';

export class Frame {
  private pins: number[] = [];
  private roll: Roll;

  constructor(roll: Roll) {
    this.roll = roll;
  }

  public playFrame(frame: number) {
    let firstRoll: number;
    let secondRoll: number;
    let extraRoll: number;
    let remainingNumberOfPins: number;

    remainingNumberOfPins = 10;
    firstRoll = this.roll.pins(remainingNumberOfPins);
    this.pins.push(firstRoll);

    if (firstRoll < 10) {
      remainingNumberOfPins = 10 - firstRoll;
      secondRoll = this.roll.pins(remainingNumberOfPins);
      this.pins.push(secondRoll);
    }

    if (frame === 10) {
      if (firstRoll === 10) {
        remainingNumberOfPins = 10;
        secondRoll = this.roll.pins(remainingNumberOfPins);
        this.pins.push(secondRoll);

        if (secondRoll === 10) {
          remainingNumberOfPins = 10;
          extraRoll = this.roll.pins(remainingNumberOfPins);
          this.pins.push(extraRoll);
        } else {
          remainingNumberOfPins = 10 - secondRoll;
          extraRoll = this.roll.pins(remainingNumberOfPins);
          this.pins.push(extraRoll);
        }
      }

      if ((this.pins.reduce((sum, number) => sum + number)) === 10) {
        remainingNumberOfPins = 10;
        extraRoll = this.roll.pins(remainingNumberOfPins);
        this.pins.push(extraRoll);
      }
    }

    return this.pins;
  }
}