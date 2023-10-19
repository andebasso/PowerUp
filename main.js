window.TrelloPowerUp.initialize({
    'card-buttons': function (t, options) {
      return [{
        icon: 'https://andebasso.github.io/PowerUp/icon.png',
        text: 'Hello World',
        callback: function(t){
          return t.popup({
            title: 'Hello World Popup',
            url: './popup.html',
            height: 184
          });
        }
      }];
    }
  });
  