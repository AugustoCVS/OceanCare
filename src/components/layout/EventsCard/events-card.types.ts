export type EventsCardProps = {
  name: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
  participants: number;
  isScreen?: boolean;
  handleSubscribeUser?: () => void;
  userAlreadySubscribed?: boolean;
  loading?: boolean;
}