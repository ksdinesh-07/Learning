// js/animate.js

export function animateRemove(element, callback, duration = 300) {
    if (!element) {
        callback?.();
        return;
    }

    element.classList.add("is-removing");

    setTimeout(() => {
        element.remove();
        callback?.();
    }, duration);
}