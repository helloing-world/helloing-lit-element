export function randomPosition(child) {
    const childRect = child.getBoundingClientRect();
    const parentRect = child.parentNode.getBoundingClientRect();
    const left = Math.random() * (parentRect.width - childRect.width);
    const top = Math.random() * (parentRect.height - childRect.height);
    child.style.left = `${left}px`;
    child.style.top = `${top}px`;
}