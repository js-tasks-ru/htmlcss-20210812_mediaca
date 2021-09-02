'use strict';

class Modal {
    _modalEl;

    _elBody;

    _activeClass;

    constructor(modalEl, openEl, closeEl, activeClass) {
        this._modalEl = modalEl;
        this._elBody = document.body;
        this._activeClass = activeClass;

        openEl.addEventListener('click', this._open.bind(this));
        closeEl.addEventListener('click', this._hide.bind(this));
    }

    _open() {
        this._modalEl.classList.add(this._activeClass);
        this._elBody.style.overflow = 'hidden';
    }

    _hide() {
        this._modalEl.classList.remove(this._activeClass);
        this._elBody.style.overflow = '';
    }
}
