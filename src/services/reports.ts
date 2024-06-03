import { api } from "./api";
import { RequestReportProps } from "./interfaces/reports";

export const ReportsService = {
  createReport: async ({
    data,
    userId,
  }: {
    data: RequestReportProps;
    userId: number;
  }) => {
    const res = await api.post(`/reports/register${userId}`, data);

    return res.data;
  },
};
