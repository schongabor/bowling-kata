import { Game } from './index';
import { Frame } from '../frame';
import { Roll } from '../roll';

describe('Game', () => {
  let roll: Roll;
  let frame: Frame;
  let game: Game;
  let mockRoll: number;

  beforeEach(() => {
    roll = Roll.create();
    frame = new Frame(roll)
    game = new Game(frame);
  })

  it('calls frame 10 times', () => {
    jest.spyOn(frame, 'playFrame');

    game.playGame();

    expect(frame.playFrame).toHaveBeenCalledTimes(10);
  });

  it('stores every frameScore in gameScore array', () => {
    game.playGame();

    expect(game.gameScores.length).toEqual(10);
  });

  it('adds spare bonus the last frameScore', () => {
    mockRoll = 5;
    jest.spyOn(roll, 'pins').mockReturnValue(mockRoll)

    game.playGame();

    const firstFramescore = game.gameScores[0].reduce((sum, number) => sum + number);
    console.log(firstFramescore);
    expect(firstFramescore).toEqual(15);
  });

  it('adds strike bonus the last frameScore', () => {
    mockRoll = 10;
    jest.spyOn(roll, 'pins').mockReturnValue(mockRoll)

    game.playGame();

    const firstFramescore = game.gameScores[0].reduce((sum, number) => sum + number);
    expect(firstFramescore).toEqual(30);
  });

  it('scores 300 if mockRoll is 10', () => {
    mockRoll = 10;
    jest.spyOn(roll, 'pins').mockReturnValue(mockRoll)

    game.playGame();

    const firstFramescore = game.gameScores.flat(1).reduce((sum, number) => sum + number);
    expect(firstFramescore).toEqual(300);
  });

  it('scores 150 if mockRoll is 5', () => {
    mockRoll = 5;
    jest.spyOn(roll, 'pins').mockReturnValue(mockRoll)

    game.playGame();

    const firstFramescore = game.gameScores.flat(1).reduce((sum, number) => sum + number);
    expect(firstFramescore).toEqual(150);
  });
});