var t = TrelloPowerUp.iframe();

document.getElementById('saveData').addEventListener('click', function() {
    const activityName = document.getElementById('activityName').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    t.set('card', 'shared', 'activityData', {
        name: activityName,
        startDate: startDate,
        endDate: endDate
    }).then(function() {
        alert('Data saved!');
    });
});

document.getElementById('generateReport').addEventListener('click', function() {
    t.cards('all').then(function(cards) {
        let totalDuration = 0;
        let count = 0;
        cards.forEach(function(card) {
            t.get(card.id, 'shared', 'activityData').then(function(activityData) {
                if (activityData && activityData.startDate && activityData.endDate) {
                    let start = new Date(activityData.startDate);
                    let end = new Date(activityData.endDate);
                    let duration = (end - start) / (1000 * 60 * 60 * 24); // duration in days
                    totalDuration += duration;
                    count++;
                }
                if (count > 0) {
                    let averageDuration = totalDuration / count;
                    alert('Average duration: ' + averageDuration.toFixed(2) + ' days.');
                } else {
                    alert('No data available for report.');
                }
            });
        });
    });
});
