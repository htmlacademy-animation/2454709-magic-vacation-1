export default () => {
  document.addEventListener(`DOMContentLoaded`, () => {
    const app = document.getElementById(`app`);
    if (app) {
      app.classList.add(`loaded`);
    }
  });
};
