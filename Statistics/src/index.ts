import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { WinAnalyzer } from "./analyzer/WinsAnalyzer";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { Summary } from "./Summary";

const matchReader = new MatchReader(new CsvFileReader("football.csv"));
matchReader.load();

const summary = new Summary(
  new WinAnalyzer("Man United"),
  new ConsoleReport(),
);

summary.buildAndPrintReport(matchReader.matches);

