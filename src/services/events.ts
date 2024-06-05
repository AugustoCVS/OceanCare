import { api } from "./api";
import {
  EventsProps,
  GetEventsByUserProps,
  GetEventsResponse,
  RequestGetEvents,
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

  getAllEvents: async ({page, size, name}: RequestGetEvents) => {
      const res = await api.get<GetEventsResponse>(`/events/list?page=${page}&size=${size}&name=${name}`);

      return res.data;
  }
};
