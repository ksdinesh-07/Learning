export function animateRemove(element, callback, duration = 300) {
    if (!element) {
        callback?.();
        return;
    }

    // Respect users who prefer reduced motion
    const reduceMotion =
        window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
        element.remove();
        callback?.();
        return;
    }

    element.classList.add("is-removing");

    setTimeout(() => {
        if (element.isConnected) element.remove();
        callback?.();
    }, duration);
}