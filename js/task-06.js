const inputEl = document.querySelector('input');

inputEl.addEventListener('blur', onBorderColorChange);

function onBorderColorChange( event) {
    const condition = event.currentTarget.value.length;

    if (Number(inputEl.dataset.length) !== condition) {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
    else {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');

    }
}