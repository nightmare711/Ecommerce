export const onMoveAnimation = (ele, animation) => {
  const root = document.querySelector(`#${ele}`);
  if (root) {
    root.style.animation = `${animation} .3s`;
    root.style.animationFillMode = 'forwards';
  }
};