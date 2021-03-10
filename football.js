function countPlayers(roster) {
  let totalPlayers = 0;
  for (let i = 0; i < roster.length; i++) {
    totalPlayers++;
  }
  return totalPlayers;
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
  let namesAndNums = [];
  for (let i = 0; i < roster.length; i++) {
    namesAndNums.push(`${roster[i].name}\n${roster[i].number}`);
  }
  return namesAndNums;
}

function countPlayersAtPosition(roster, position) {
  let myArr = roster.filter((poop) => poop.position === position);
  return myArr.length;
}

function countPositions(roster, positions) {
  let positionsRoster = {};
  for (let i = 0; i < positions.length; i++) {
    positionsRoster[positions[i]] = countPlayersAtPosition(
      roster,
      positions[i]
    );
  }
  return positionsRoster;
}
