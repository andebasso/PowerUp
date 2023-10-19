/* global TrelloPowerUp */
var t = TrelloPowerUp.iframe();

t.render(function(){
    t.sizeTo('#content').done();
    
    t.card('id').get('id').then(function(cardId){
        var btn = document.createElement('button');
        btn.textContent = 'Hello World';
        btn.onclick = function() {
            t.alert({
                message: 'Hello from your Power-Up!',
                duration: 5,
            });
        };
        document.body.appendChild(btn);
    });
});

  