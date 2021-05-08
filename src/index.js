import cards from './menu.json';
import cardsTpl from './templates/menu-card.hbs';

const listMenu = document.querySelector('.js-menu');
const cardsMarkup = createCardMenu(cards);
listMenu.insertAdjacentHTML('beforeend', cardsMarkup);

function createCardMenu(cards) {
    return cards.map(cardsTpl).join('');
};

    const bodyTheme = document.querySelector('body');
bodyTheme.classList.add(localStorage.getItem('theme'));

const checkBox = document.querySelector('#theme-switch-toggle');
checkBox.addEventListener('change', changeColor);

const theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

function changeColor() {
    const bodyTheme = document.querySelector('body');

    if(this.checked)
    {
        bodyTheme.classList.remove(theme.LIGHT);
        bodyTheme.classList.add(theme.DARK);
        localStorage.setItem('theme', theme.DARK);
    }
    else {
        bodyTheme.classList.remove(theme.DARK);
        bodyTheme.classList.add(theme.LIGHT);
    localStorage.setItem('theme', theme.LIGHT);
    };   
};

checkBox.checked = bodyTheme.classList.contains(theme.DARK)
    ? true
    : false;
