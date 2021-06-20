import { Frame, FrameScore } from './index';
import { Roll } from '../roll';

describe('Frame', () => {
  let roll: Roll;
  let frame: Frame;
  let frameNumber = 1;
  let mockRoll: number;

  beforeEach(() => {
    roll = Roll.create();
    frame = new Frame(roll);

  })

  it('returns an array with 1 number if the player rolls a strike', () => {
    mockRoll = 10;
    jest.spyOn(roll, 'pins').mockReturnValue(mockRoll)

    const result = frame.playFrame(frameNumber);

    expect(result.length).toEqual(1);
  });

  it('returns an array with 2 numbers if the first roll was lower than 10', () => {
    mockRoll = 5;
    jest.spyOn(roll, 'pins').mockReturnValue(mockRoll)

    const result = frame.playFrame(frameNumber);

    expect(result.length).toEqual(2);
  });

  it('returns an array with 2 numbers, sum of them is never more than 10', () => {
    const result = frame.playFrame(frameNumber);
    let frameScore = result.reduce((sum, number) => sum + number);
    expect(frameScore).toBeLessThan(11);
  });

  it('returns an array with 3 numbers in the 10th frame if the player rolls a spare or a strike', () => {
    frameNumber = 10;
    mockRoll = 10;
    jest.spyOn(roll, 'pins').mockReturnValue(mockRoll)

    const result = frame.playFrame(frameNumber);

    expect(result.length).toEqual(3);
  });

  it('resets frameScore array if playFrame is called multiple times', () => {
    let results: FrameScore[] = [];
    for (let i = 0; i < 10; i++) {
      results.push(frame.playFrame(i));
      expect(results[i].length).toBeLessThan(4);
    }
  });
});