export default function getElementPosition(el: HTMLElement) {
  if (!el) throw Error("There is no Element");

  const rect = el.getBoundingClientRect();

  return {
    top: rect.top,
    left: rect.left,
    right: rect.right,
    bottom: rect.bottom,
  };
}
