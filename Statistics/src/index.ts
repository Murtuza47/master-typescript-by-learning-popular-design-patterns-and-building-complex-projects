import { MatchCsvFileReader } from "./MatchCsvFileReader";
import { MatchResult } from "./MatchResult";

const matchReader = new MatchCsvFileReader("football.csv");
matchReader.read();
const parsedMatches = matchReader.data;

let manUnitedWins = 0;


for (let match of parsedMatches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  }

  if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games.`);
