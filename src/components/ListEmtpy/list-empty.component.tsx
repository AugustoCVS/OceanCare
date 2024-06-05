import { Skeleton } from "native-base";
import { ListEmptyProps } from "./list-empty.types";
import { View } from "react-native";
import { EventEmpty } from "./components/EventEmpty/event-empty.component";
import { UsersEmpty } from "./components/UsersEmpty/users-empty.component";

export const ListEmpty: React.FC<ListEmptyProps> = ({
  loading,
  isSecondary,
  isEventEmpty,
  isUserEmpty,
}) => {
  if (loading) {
    return Array.from({ length: 5 }).map((_, index) => (
      <View className="w-full flex flex-col p-4">
        <Skeleton
          key={index}
          height={isSecondary ? 200 : 100}
          width="100%"
          borderRadius={8}
        />
      </View>
    ));
  }

  if (isEventEmpty) return <EventEmpty />;

  if (isUserEmpty) return <UsersEmpty />;

  return null;
};
