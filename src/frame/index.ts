import { Roll } from '../roll';

export type FrameScore = number[];

export class Frame {
  private frameScore: FrameScore = [];
  private roll: Roll;

  constructor(roll: Roll) {
    this.roll = roll;
  }

  public playFrame(frame: number) {
    let firstRoll: number;
    let secondRoll: number;
    let extraRoll: number;
    let remainingNumberOfPins: number;

    this.frameScore = [];

    remainingNumberOfPins = 10;
    firstRoll = this.roll.pins(remainingNumberOfPins);
    this.frameScore.push(firstRoll);

    if (firstRoll < 10) {
      remainingNumberOfPins = 10 - firstRoll;
      secondRoll = this.roll.pins(remainingNumberOfPins);
      this.frameScore.push(secondRoll);
    }

    if (frame === 10) {
      if (firstRoll === 10) {
        remainingNumberOfPins = 10;
        secondRoll = this.roll.pins(remainingNumberOfPins);
        this.frameScore.push(secondRoll);

        if (secondRoll === 10) {
          remainingNumberOfPins = 10;
          extraRoll = this.roll.pins(remainingNumberOfPins);
          this.frameScore.push(extraRoll);
        } else {
          remainingNumberOfPins = 10 - secondRoll;
          extraRoll = this.roll.pins(remainingNumberOfPins);
          this.frameScore.push(extraRoll);
        }
      }

      if ((this.frameScore.reduce((sum, number) => sum + number)) === 10) {
        remainingNumberOfPins = 10;
        extraRoll = this.roll.pins(remainingNumberOfPins);
        this.frameScore.push(extraRoll);
      }
    }

    return this.frameScore;
  }
}