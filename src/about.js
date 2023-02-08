function displayAbout() {
    const container = document.createElement('div');
    container.classList.add('container');
    container.classList.add('opaque');

    const header = document.createElement('h1');
    header.classList.add('headline');
    header.innerText = 'Our Story';
    container.appendChild(header);

    const divider = document.createElement('div');
    divider.classList.add('divider');
    container.appendChild(divider);

    const copy = document.createElement('p');
    copy.innerText = 'Welcome to The Odd Duck, a luxurious and authentic Chinese fine dining experience. Our story begins with our founder and head chef, Chef Huáng, who arrived in America with a passion for bringing the best of Chinese cuisine to a wider audience.\n\nStarting from the bottom and working tirelessly in kitchens, Chef Huáng honed his skills and developed a unique perspective on Chinese cooking. With a deep appreciation for traditional techniques and a flair for innovation, he eventually rose to the top of his field and became a renowned figure in the world of Chinese cuisine.\n\nAt The Odd Duck, we are proud to bring Chef Huáng\'s passion and expertise to the table. Our menu is a celebration of authentic and innovative Chinese cuisine, crafted using only the freshest ingredients and time-honored techniques. From hand-pulled noodles and Peking duck, to new twists on classic dishes, our menu is a testament to the chef\'s mastery of Chinese cooking.\n\nIn addition to our delicious food, The Odd Duck is also proud to offer an exceptional dining environment, with elegant decor and warm, attentive service. Whether you\'re joining us for a romantic dinner, a business lunch, or a celebration with friends and family, our restaurant is the perfect setting for a truly unforgettable dining experience.\n\nWe invite you to come and discover the exceptional flavors and unique cultural experience that await you at The Odd Duck. Join us today and taste the passion and dedication of our world-renowned chef, Chef Huáng, in every bite.';
    container.appendChild(copy);


    const main = document.querySelector('.main');
    main.innerHTML = '';
    main.appendChild(container);
}

export default displayAbout;