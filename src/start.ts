import { Roll } from './roll';
import { Frame } from './frame';
import { Game } from './game';

const game = new Game(new Frame(Roll.create()));

game.playGame();