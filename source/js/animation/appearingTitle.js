export function appearingTitle(node, animation) {
  node.innerHTML = node.innerText
    .split(` `)
    .map((word, wordIdx) => {
      const delay = Array.isArray(animation.delay)
        ? animation.delay[wordIdx]
        : animation.delay;
      const symbols = word
        .split(``)
        .map((symbol, sblIdx) => {
          return `
            <span
              class='symbol'
              style='
                animation-name: ${animation.name};
                animation-duration: ${animation.duration - animation.priority[wordIdx][sblIdx] * 0.1}s;
                animation-delay: ${delay + animation.priority[wordIdx][sblIdx] * 0.1}s;
                animation-fill-mode: ${animation.fillMode};
                animation-timing-function: ${animation.timingFunction};
              '
            >${symbol}</span>`;
        })
        .join(``);
      return `
        <span class='string'>${symbols}</span>`;
    })
    .join(` `);
}
