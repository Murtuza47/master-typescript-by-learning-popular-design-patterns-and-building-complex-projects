import { WinAnalyzer } from "./analyzer/WinsAnalyzer";
import { MatchData } from "./MatchData";
import { ConsoleReport } from "./reportTargets/ConsoleReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  run(report: string): void;
}

export class Summary {
  static winsAnalyzerWithConsoleReport(team: string): Summary {
    return new Summary(new WinAnalyzer(team), new ConsoleReport());
  }
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);
    this.outputTarget.run(report);
  }
}