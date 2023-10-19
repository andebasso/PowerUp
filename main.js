const t = TrelloPowerUp.iframe();

t.render(function() {
    // Nothing to render in this basic example.
});

function showHelloWorld(t, options) {
    // This function will add a "Hello World" comment to the card's activity feed.
    return t.card('id').then(function(card) {
        return t.post(`/cards/${card.id}/actions/comments`, { text: 'Hello World' });
    });
}

// Register our callback function
TrelloPowerUp.initialize({
    'card-buttons': function(t, options) {
        return [{
            icon: 'https://andebasso.github.io/PowerUp/icon.png',
            text: 'Say Hello World',
            callback: showHelloWorld
        }];
    }
});
