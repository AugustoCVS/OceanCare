import { EventsProps } from "@/services/interfaces/events";

export type EventsListProps = {
  events: EventsProps[];
  isLoading: boolean;
  onRefresh: () => void;
  handleSubscribeUserOnEvent: (eventId: number) => void;
};