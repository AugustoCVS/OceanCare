import { View } from "react-native";
import { useMenu } from "./menu.hook";
import { Header } from "./components/Header/header.component";
import { ButtonSection } from "./components/ButtonSection/button-section.component";
import { ModalUpdateInfo } from "./components/ModalUpdateInfo/modal-update-info.component";
import { Item } from "./components/Item/item.component";
import { AchievementsList } from "@/components/AchievementsList/achievements-list.component";

export const Menu: React.FC = () => {
  const { refs, states, actions } = useMenu();

  return (
    <>
      <View className="flex-1 h-full justify-between pt-24 items-center bg-gray-100">
        <View className="bg-white p-8 rounded-lg shadow-md w-11/12">
          <Header
            name={states.user?.name || "-"}
            handleChangePhoto={actions.handleChangePhoto}
          />

          <View className="border-t border-gray-300 pt-4">
            {states.userInfo.map((info) => (
              <Item key={info.id} label={info.label} value={info.value} />
            ))}
          </View>

          <AchievementsList achievements={states.user?.achievements || []} />
        </View>
        <ButtonSection
          handleUpdateInfo={actions.handleOpenModalUpdate}
          handleLogout={actions.handleLogout}
        />
      </View>

      <ModalUpdateInfo modalRef={refs.modalUpdateRef} userInfo={states.user} />
    </>
  );
};
