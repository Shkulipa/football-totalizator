const parseScoreMatch = (matchScore) => {
    const [homeScore, guestScore] = matchScore.split(':');
    return [parseInt(homeScore), parseInt(guestScore)];
}

const matchResult = (matchScore) => {
    const [homeScore, guestScore] = parseScoreMatch(matchScore);

    let statusMatch;
    if (homeScore > guestScore) statusMatch = 'home won';
    if (homeScore < guestScore) statusMatch = 'guest won';
    if (homeScore === guestScore) statusMatch = 'draw';

    return statusMatch;
}

function simulate(players, matchScore) {
    const listResult = {};
    for (let [player, prediction] of Object.entries(players)) {
        if (prediction === matchScore) {
            listResult[player] = 2;
        } else {
            const generalMatchResult = matchResult(matchScore);
            const playerMatchResult = matchResult(prediction);

            if (generalMatchResult === playerMatchResult) listResult[player] = 1;
            else listResult[player] = 0;
        }
    }
  
    return listResult;
}

const predictions = { 'user1': '2:1', 'user2': '3:1', 'user3': '0:0', 'user4': '1:4' };
const matchScore = '2:1';

const list = simulate(predictions, matchScore);

console.log('list', list);