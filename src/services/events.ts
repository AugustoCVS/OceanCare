import { api } from "./api";
import {
  EventsProps,
  GetEventsByUserProps,
  GetEventsResponse,
} from "./interfaces/events";

export const EventsService = {
  getEventsByUser: async ({ userId, page = 0, size = 20}: GetEventsByUserProps) => {
    const res = await api.get<GetEventsResponse>(`/events/list/user/${userId}?page=${page}&size=${size}`);

    return res.data;
  },

  subscribeUserOnEvent: async ({
    eventId,
    userId,
  }: {
    eventId: number;
    userId: number;
  }) => {
    const res = await api.post(`/events/subscribe/${eventId}/${userId}`);

    return res.data;
  },
};
