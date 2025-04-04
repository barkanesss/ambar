document.addEventListener('DOMContentLoaded', () => {
    const gameList = document.getElementById('game-list');

    fetch('/api/games')
        .then(response => response.json())
        .then(games => {
            games.forEach(game => {
                const gameItem = document.createElement('div');
                gameItem.innerHTML = `<h3>${game.title}</h3><p>${game.description}</p><p>Price: $${game.price}</p>`;
                gameList.appendChild(gameItem);
            });
        });

    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent!');
    });
});