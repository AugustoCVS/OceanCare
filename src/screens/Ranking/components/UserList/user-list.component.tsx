import { UserListProps } from "./user-list.types";
import { FlatList, RefreshControl } from "react-native";
import { UserCard } from "./components/UserCard/user-card.component";
import { ListEmpty } from "@/components/ListEmtpy/list-empty.component";

export const UserList: React.FC<UserListProps> = ({
  isLoading,
  onRefresh,
  userList,
}) => {
  return (
    <FlatList
      data={userList}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={isLoading}
          onRefresh={onRefresh}
          tintColor={"#173042FC"}
        />
      }
      contentContainerStyle={{
        alignItems: "center",
        padding: 16,
        minHeight: "100%",
      }}
      renderItem={({ item }) => <UserCard {...item} />}
      ListEmptyComponent={<ListEmpty loading={isLoading} isUserEmpty />}
    />
  );
};
