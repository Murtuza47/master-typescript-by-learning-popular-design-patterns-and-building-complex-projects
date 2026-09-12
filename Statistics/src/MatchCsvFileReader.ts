import { readFileSync } from "node:fs";

export class MatchCsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = readFileSync(this.filename, {
      encoding: "utf-8",
    })
      .split("\n")
      .map((row) => row.split(","));
  }
}
