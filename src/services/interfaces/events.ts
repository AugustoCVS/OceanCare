import { UserProps } from "./user";

export interface MetaData {
  pageNumber: number;
  pageSize: number;
}

export type EventsProps = {
  id: number;
  name: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
  users: UserProps[];
};

export type GetEventsByUserProps = {
  userId: number;
  page: number;
  size: number;
};

export type GetEventsResponse = {
  pageable: MetaData;
  content: EventsProps[];
}

export type SubscribeUserOnEventProps = {
  eventId: number;
  userId: number;
};

export type RequestGetEvents = {
  page: number;
  size: number;
  name?: string;
};
