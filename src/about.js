function displayAbout() {
    const container = document.createElement('div');
    container.classList.add('container');
    container.classList.add('opaque');

    const copy = document.createElement('p');
    copy.classList.add('paragraph');
    copy.innerText = 'Each dish is created using only the freshest ingredients and time-honored techniques, drawing upon generations of culinary tradition to bring the best of China to your plate.'
    container.appendChild(copy);

    const header = document.createElement('h1');
    header.classList.add('headline');
    header.innerText = 'Our Menu';
    container.appendChild(header);

    const divider = document.createElement('div');
    divider.classList.add('divider');
    container.appendChild(divider);

    const menu = [
        {
            'entree': 'Peking Duck',
            'price': '$59',
            'description': 'a Beijing specialty, made by roasting the duck until the skin is crispy, and served with pancakes, scallions, and sweet bean sauce.'
        },
        {
            'entree': 'Kung Pao Chicken',
            'price': '$47',
            'description': 'a spicy Sichuan dish made with diced chicken, peanuts, vegetables, and dried chili peppers in a savory sauce.'
        },
        {
            'entree': 'Hot and Sour Soup',
            'price': '$23',
            'description': 'a traditional soup made with a tangy broth, tofu, mushrooms, and various vegetables, often with a spicy kick.'
        },
        {
            'entree': 'Mongolian Beef',
            'price': '$65',
            'description': 'a dish made with stir-fried sliced beef, onions, and scallions in a savory sauce, served over rice.'
        },
        {
            'entree': 'Ma Po Tofu',
            'price': '$40',
            'description': 'a Sichuan dish made with soft tofu in a spicy sauce, with ground beef or pork and various seasonings.'
        },
    ];

    menu.forEach((element, index) => {
        const entree = document.createElement('p');
        entree.classList.add('entree');
        entree.innerText = menu[index].entree;

        const price = document.createElement('span');
        price.classList.add('price');
        price.innerText = menu[index].price;

        const description = document.createElement('p');
        description.classList.add('description');
        description.innerText = menu[index].description;

        entree.appendChild(price);
        container.appendChild(entree);
        container.appendChild(description);
    });

    const main = document.querySelector('.main');
    main.innerHTML = '';
    main.appendChild(container);
}

export default displayAbout;