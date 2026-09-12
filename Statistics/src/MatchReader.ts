import { MatchData } from "./MatchData";
import { MatchResult } from "./MatchResult";
import { convertDateStringToDate } from "./utils";

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => [
        convertDateStringToDate(row[0]),
        row[1],
        row[2],
        Number.parseInt(row[3]),
        Number.parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ],
    );
  }
}
