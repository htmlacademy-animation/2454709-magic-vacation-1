import {appearingTitle} from "../animation/appearingTitle";

export default () => {
  document.addEventListener(`DOMContentLoaded`, () => {
    const app = document.getElementById(`app`);
    addAnimationForMainTitle();
    addAnimationForCompetitionDate();
    addAnimationForHistoryTitle();
    addAnimationForPrizeTitle();
    addAnimationForRulesTitle();
    addAnimationForGameTitle();
    if (app) {
      app.classList.add(`loaded`);
    }
  });
};

function addAnimationForMainTitle() {
  const mainTitle = document.getElementById(`main_title`);
  appearingTitle(
      mainTitle,
      {
        name: `moveSymbol`,
        duration: 0.8,
        delay: [0.3, 0.7],
        fillMode: `backwards`,
        timingFunction: `ease-out`,
        priority: [
          [2, 1, 0, 1, 2, 1, 0, 2, 1, 0, 1, 1], // Таинственный
          [2, 3, 1, 0, 2, 0] // отпуск
        ]
      }
  );
}

function addAnimationForCompetitionDate() {
  const mainTitle = document.getElementById(`competition_date`);
  appearingTitle(
      mainTitle,
      {
        name: `moveSymbol`,
        duration: 0.8,
        delay: 1.1,
        fillMode: `backwards`,
        timingFunction: `ease-out`,
        priority: [
          [3, 2], // 01
          [2], // -
          [4, 1, 2, 2, 5], // 31.05
          [2], // /
          [0, 4, 3, 1] // 2020
        ]
      }
  );
}

function addAnimationForHistoryTitle() {
  const mainTitle = document.getElementById(`history_title`);
  appearingTitle(
      mainTitle,
      {
        name: `moveSymbol`,
        duration: 0.6,
        delay: 0.3,
        fillMode: `backwards`,
        timingFunction: `ease-out`,
        priority: [
          [3, 1, 0, 1, 2, 1, 0], // История
        ]
      }
  );
}


function addAnimationForPrizeTitle() {
  const mainTitle = document.getElementById(`prizes_title`);
  appearingTitle(
      mainTitle,
      {
        name: `moveSymbol`,
        duration: 0.6,
        delay: 0.3,
        fillMode: `backwards`,
        timingFunction: `ease-out`,
        priority: [
          [3, 1, 0, 1, 2], // Призы
        ]
      }
  );
}

function addAnimationForRulesTitle() {
  const mainTitle = document.getElementById(`rules_title`);
  appearingTitle(
      mainTitle,
      {
        name: `moveSymbol`,
        duration: 0.6,
        delay: 0.3,
        fillMode: `backwards`,
        timingFunction: `ease-out`,
        priority: [
          [4, 2, 1, 0, 3, 2, 0], // Правила
        ]
      }
  );
}

function addAnimationForGameTitle() {
  const mainTitle = document.getElementById(`game_title`);
  appearingTitle(
      mainTitle,
      {
        name: `moveSymbol`,
        duration: 0.6,
        delay: 0.3,
        fillMode: `backwards`,
        timingFunction: `ease-out`,
        priority: [
          [3, 2, 0, 1], // Игра
        ]
      }
  );
}
