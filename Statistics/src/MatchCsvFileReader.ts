import { readFileSync } from "node:fs";
import { convertDateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

type MatchData = [Date, string, number, number, MatchResult, string];

export class MatchCsvFileReader {
  data: MatchData[] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = readFileSync(this.filename, {
      encoding: "utf-8",
    })
      .split("\n")
      .map((row) => row.split(","))
      .map(
        (row): MatchData => [
          convertDateStringToDate(row[0]),
          row[1],
          Number.parseInt(row[2]),
          Number.parseInt(row[3]),
          row[4] as MatchResult,
          row[5],
        ],
      );
  }
}
