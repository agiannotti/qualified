function countPlayers(roster) {
  let playerCount = 0;
  for (let i = 0; i < roster.length; i++) {
    playerCount += 1;
  }
  return playerCount;
}

function topScoringPlayer(roster) {
  if (roster.length === 0) {
    return null;
  }
  let topPlayer = [];
  let topScore = 0;
  for (let i = 0; i < roster.length; i++) {
    if (roster[i].pointsScored > topScore) {
      topScore = roster[i].pointsScored;
      topPlayer = roster[i];
    }
  }
  return topPlayer;
}

function namesAndNumbers(roster) {
  let str = [];
  for (let i = 0; i < roster.length; i++) {
    str.push(roster[i].name + '\n' + roster[i].number);
  }
  return str;
}

function countPlayersAtPosition(roster, position) {
  let totalAtPosition = 0;
  for (let i = 0; i < roster.length; i++) {
    if (roster[i].position === position) {
      totalAtPosition++;
    }
  }
  return totalAtPosition;
}

function countPositions(roster, positions) {}
