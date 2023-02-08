function displayContact() {
    const container = document.createElement('div');
    container.classList.add('container');
    container.classList.add('centered');
    container.classList.add('opaque');

    const header = document.createElement('h1');
    header.classList.add('headline');
    header.innerText = 'Contact Us';
    

    const divider = document.createElement('div');
    divider.classList.add('divider');

    const subheader = document.createElement('p');
    subheader.innerText = 'Questions? Comments? Concerns?';

    const button = document.createElement('button');
    button.classList.add('button');
    button.innerText = 'Call (123) 456-7890';

    container.appendChild(header);
    container.appendChild(divider);
    subheader.classList.add('subheader');
    container.appendChild(subheader);
    container.appendChild(button);

    const main = document.querySelector('.main');
    main.innerHTML = '';
    main.appendChild(container);
}

export default displayContact;