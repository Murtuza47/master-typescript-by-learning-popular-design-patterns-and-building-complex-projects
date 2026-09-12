import { convertDateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";
import { CsvReader } from "./CsvReader";

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchCsvFileReader extends CsvReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      convertDateStringToDate(row[0]),
      row[1],
      row[2],
      Number.parseInt(row[3]),
      Number.parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}
