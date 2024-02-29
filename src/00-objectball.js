function gameObject() {
  let mainObject = {
    home: {
      teamName: "Brooklyn Nets",
      colors: "Black, White",
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: "Turquoise, Purple",
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
      },
    },
  };
  return mainObject;
}
console.log(gameObject());

function homeTeamName() {
  let object = gameObject();
  return object.home.teamName;
}

console.log(homeTeamName());
console.log(gameObject().home.players["Reggie Evans"].number);

function numPointsScored(playerName) {
  let gameObjectData = gameObject();
  for (let team in gameObjectData) {
    for (let player in gameObjectData[team].players) {
      if (player === playerName) {
        return gameObjectData[team].players[player].points;
      }
    }
  }
}

console.log(numPointsScored("Reggie Evans"));

function shoeSize(playerName) {
  for (let team in gameObject()) {
    for (let player in gameObject()[team].players) {
      if (player === playerName) {
        return gameObject()[team].players[player].shoe;
      }
    }
  }
}
console.log(shoeSize("Reggie Evans"));

function teamColors(nameOfTeam) {
  for (let team in gameObject()) {
    if (gameObject()[team].teamName === nameOfTeam) {
      return gameObject()[team].colors;
    }
  }
}

console.log(teamColors("Charlotte Hornets"));

function teamNames() {
  let teamNamesArray = [];
  for (let team in gameObject()) {
    teamNamesArray.push(gameObject()[team].teamName);
  }
  return teamNamesArray;
}

console.log(teamNames());

function playerNumbers(nameOfTeam) {
  let jerseyNums = [];
  for (let team in gameObject()) {
    if (gameObject()[team].teamName === nameOfTeam) {
      for (let player in gameObject()[team].players) {
        jerseyNums.push(gameObject()[team].players[player].number);
      }
    }
  }
  return jerseyNums;
}

console.log(playerNumbers("Charlotte Hornets"));

function playerStats(playerName) {
  for (let team in gameObject()) {
    for (let player in gameObject()[team].players) {
      if (player === playerName) {
        return gameObject()[team].players[player];
      }
    }
  }
}

console.log(playerStats("Reggie Evans"));

function bigShoeRebounds() {
  let largestShoe = 0;
  let reboundCount = 0;

  for (let team in gameObject()) {
    for (let player in gameObject()[team].players) {
      if (gameObject()[team].players[player].shoe > largestShoe) {
        largestShoe = gameObject()[team].players[player].shoe;
        reboundCount = gameObject()[team].players[player].rebounds;
      }
    }
  }
  return reboundCount;
}

console.log(bigShoeRebounds());
