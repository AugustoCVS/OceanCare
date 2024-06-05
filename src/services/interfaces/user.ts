import { MetaData } from "./events";

export type UserProps = {
  id: number;
  name: string;
  email: string;
  reportedTrash: number;
  achievements: AchievementsType[];
};

export enum AchievementsType {
  FiftyReports = "fiftyReports",
  HundredReports = "hundredReports",
  TwoHundredReports = "twoHundredReports",
  FiveHundredReports = "fiveHundredReports",
  ThousandReports = "thousandReports",
  TwoThousandReports = "twoThousandReports",
  ThreeThousandReports = "threeThousandReports",
  FiveThousandReports = "fiveThousandReports",
  TenThousandReports = "tenThousandReports",
}

export type ResponseUserProps = {
  pageable: MetaData;
  content: UserProps[];
}