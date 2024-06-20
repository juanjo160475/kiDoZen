document.addEventListener('DOMContentLoaded', () => {
    const mirrorText = document.querySelector('.pagina_uno_texto');
    let hasScrolled = false;

    const handleScroll = () => {
        if (!hasScrolled) {
            mirrorText.classList.add('animate-flip');
            hasScrolled = true;
        }
    };

    const debounce = (func, wait) => {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    };

    const debouncedHandleScroll = debounce(handleScroll, 50);

    window.addEventListener('scroll', debouncedHandleScroll);
});
