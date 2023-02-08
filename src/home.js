function displayHome() {
    const container = document.createElement('div');
    container.classList.add('container');

    const copy = document.createElement('p');
    copy.classList.add('paragraph');
    copy.innerText = 'Welcome to The Odd Duck, a premier Chinese fine dining destination known for our authentic and innovative cuisine. Our world-renowned chef leads a talented team dedicated to delivering an unforgettable dining experience, with each dish crafted using the freshest ingredients and time-honored techniques. Join us in our elegant setting for a taste of the best of Chinese cuisine, accompanied by warm and attentive service. Experience the exceptional flavors and unique cultural journey that await you at The Odd Duck.'

    const button = document.createElement('button');
    button.classList.add('button');
    button.innerText = 'Make A Reservation';
    
    container.appendChild(copy);
    container.appendChild(button);

    const main = document.querySelector('.main');
    main.innerHTML = '';
    main.appendChild(container);
}

export default displayHome;