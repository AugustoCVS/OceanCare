export enum ReportType {
  TRASH = 'TRASH',
  OTHER = 'OTHER',
  CLOTHES = 'CLOTHES',
  PACKAGING = 'PACKAGING',
  BOTTLES = 'BOTTLES',
  OIL = 'OIL',
  CHEMICALS = 'CHEMICALS',
}

export type RequestReportProps = {
  name: string;
  type: ReportType;
  location: string;
  description: string;
}