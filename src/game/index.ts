import { Frame, FrameScore } from '../frame';

type GameScore = FrameScore[];

export class Game {
  private frame: Frame;
  private frameCounter: number;
  public gameScores: GameScore = [];

  constructor(frame: Frame) {
    this.frame = frame;
    this.frameCounter = 1;
  }

  public playGame() {
    for (this.frameCounter = 0; this.frameCounter < 10; this.frameCounter++) {
      let frameScore = this.frame.playFrame(this.frameCounter + 1);

      this.gameScores.push(frameScore);

      if (this.frameCounter > 0) {
        const previousFrameScore = this.gameScores[this.frameCounter - 1];

        if (this.wasSpare(previousFrameScore)) {
          previousFrameScore.push(frameScore[0]);
        }

        if (this.wasStrike(previousFrameScore)) {
          if (this.wasStrike(frameScore)) {
            previousFrameScore.push(frameScore[0]);
          } else {
            previousFrameScore.push(frameScore[0])
            previousFrameScore.push(frameScore[1])
          }
        }
      }
    }

    console.log(this.gameScores);
  }

  private wasSpare(frameScores: number[]): boolean {
    if (frameScores.length > 1) {
      const totalFrameScore = frameScores.reduce((sum, number) => sum + number);
      if (totalFrameScore === 10) return true;
    }
    return false;
  }

  private wasStrike(frameScores: number[]): boolean {
    if (frameScores[0] === 10) return true;
    return false;
  }
}
