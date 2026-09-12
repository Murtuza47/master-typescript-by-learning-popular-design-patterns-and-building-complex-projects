import fs from "node:fs";

const matches = fs.readFileSync("football.csv", {
  encoding: "utf-8",
});

const parsedMatches = matches.split("\n").map(row => row.split(","));
console.log(parsedMatches);

let manUnitedWins = 0;

for (let match of parsedMatches) {
  if (match[1] === "Man United" && match[5] === "H") {
    manUnitedWins++;
  }

  if (match[2] === "Man United" && match[5] === "A") {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games.`);