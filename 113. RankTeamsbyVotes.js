function rankTeams(votes) {
  const voteCount = new Map();

  for (const vote of votes) {
    for (let i = 0; i < vote.length; i++) {
      const team = vote[i];
      voteCount.set(
        team,
        (voteCount.get(team) || 0) + 10 ** (vote.length - i - 1)
      );
    }
  }

  const sortedTeams = [...voteCount.keys()].sort((a, b) => {
    const voteDiff = voteCount.get(b) - voteCount.get(a);
    if (voteDiff !== 0) {
      return voteDiff;
    } else {
      // If there is a tie, sort alphabetically
      return a.localeCompare(b);
    }
  });

  return sortedTeams.join("");
}

// Example
const votes = ["ABC", "ACB", "ABC", "ACB", "ACB"];
console.log(rankTeams(votes));

/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function (votes) {
  if (votes.length == 1) return votes[0];
  let map = {};
  for (let vote of votes) {
    for (let i = 0; i < vote.length; i++) {
      if (!(vote[i] in map)) {
        map[vote[i]] = [];
        for (let j = 0; j < vote.length; j++) {
          map[vote[i]][j] = 0;
        }
      }
      map[vote[i]][i]++;
    }
  }
  let obj = Object.entries(map);
  obj = obj.sort((a, b) => {
    for (let i = 0; i < a[1].length; i++) {
      if (a[1][i] > b[1][i]) return -1;
      else if (a[1][i] < b[1][i]) return 1;
    }
    return a[0].charCodeAt(0) - b[0].charCodeAt(0);
  });
  return obj.map((item) => item[0]).join("");
  //     const voteCount = new Map();

  //   for (const vote of votes) {
  //     for (let i = 0; i < vote.length; i++) {
  //       const team = vote[i];
  //       voteCount.set(team, (voteCount.get(team) || 0) + 10 ** (vote.length - i - 1));
  //     }
  //   }

  //   const sortedTeams = [...voteCount.keys()].sort((a, b) => {
  //     const voteDiff = voteCount.get(b) - voteCount.get(a);
  //     if (voteDiff !== 0) {
  //       return voteDiff;
  //     } else {
  //       // If there is a tie, sort alphabetically
  //       return a < b ? -1 : a > b ? 1 : 0;
  //     }
  //   });

  //   return sortedTeams.join('');

  //   const teamSize = votes[0].length;

  //   // Create an array of team objects with ranks and names
  //   const teams = Array.from({ length: 26 }, (_, i) => ({
  //     name: String.fromCharCode('A'.charCodeAt(0) + i),
  //     rank: new Array(teamSize).fill(0),
  //   }));

  //   // Count the votes for each team
  //   for (const vote of votes) {
  //     for (let i = 0; i < teamSize; i++) {
  //       const team = teams.find(t => t.name === vote[i]);
  //       team.rank[i] += 1;
  //     }
  //   }

  //   // Your existing sorting logic for teams
  //   teams.sort((a, b) => {
  //     for (let i = 0; i < teamSize; i++) {
  //       if (a.rank[i] !== b.rank[i]) {
  //         return b.rank[i] - a.rank[i];
  //       }
  //     }
  //     return a.name.localeCompare(b.name);
  //   });

  //   // Return the sorted teams as a string
  //   return teams.slice(0, teamSize).map((team) => team.name).join("");
};
