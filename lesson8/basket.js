'use strict';

const cartIconWrap = document.querySelector('.cartIconWrap');

cartIconWrap.addEventListener('click', event => {
    document.querySelector('.basket').classList.toggle('hidden');
});