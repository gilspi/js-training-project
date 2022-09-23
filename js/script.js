import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import {openModal} from './modules/modal';
import slider from './modules/slider';


window.addEventListener("DOMContentLoaded", () => {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2023-05-09');
    cards();
    calc();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        prevArrow: '.offer__slider-prev',
        nextArrow: '.offer__slider-next',
        slide: '.offer__slide',
        totalCounter: '#total',
        wrapper: '.offer__slider-wrapper',
        currentCounter: '#current',
        field: '.offer__slider-inner' 
    });
    
});