import displayHome from './home';
import displayMenu from './menu';

function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const logo = document.createElement('p');
    logo.classList.add('logo');
    logo.innerText = 'Odd Duck Restaurant';

    header.appendChild(logo);
    header.appendChild(createNav());

    return header;
}

function createNav() {
    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const navList = document.createElement('ol');
    navList.classList.add('nav-list');

    const navItem = ['Home', 'Menu', 'About', 'Contact'];
    navItem.forEach((element, index) => {
        const li = document.createElement('li');
        li.classList.add('nav-item');
        if (index === 0) {
            li.classList.add('toggled');
        }
        li.innerText = element;
        navList.appendChild(li);
        li.addEventListener('click', event => {
            setNavItem(index);
        });
    });

    nav.appendChild(navList);

    return nav;
}

function setNavItem(index) {
    const navItem = document.querySelectorAll('.nav-item');

    navItem.forEach(element => {
        element.classList.remove('toggled');
    });

    navItem[index].classList.add('toggled');

    switch (index) {
        case 0:
             displayHome();
             break;
        case 1:
            displayMenu();
            break;
        case 2:
            break;
        case 3:
            break;
    }
}

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');

    return main;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const copyright = document.createElement('p');
    copyright.innerText = `Copyright © ${new Date().getFullYear()} David McDonald | `;

    const link = document.createElement('a');
    link.innerText = 'View GitHub Profile ';
    link.href = 'https://github.com/davmmcdonald/';
    link.target = '_blank';

    const icon = document.createElement('i');
    icon.classList.add('lab');
    icon.classList.add('la-github');

    link.appendChild(icon);
    copyright.appendChild(link);
    footer.appendChild(copyright);

    return footer;
}

function initializePage() {
    const content = document.getElementById('content');
    
    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    displayMenu();
}

export default initializePage;