import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      resolve(read()
        .then((response) => json(response))
        .then((data) => {
          const gameSaving = new GameSaving(JSON.parse(data));
          return gameSaving;
        }));
    });
  }
}
