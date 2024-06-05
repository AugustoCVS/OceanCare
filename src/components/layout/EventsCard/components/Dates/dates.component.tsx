import { View, Text } from "react-native";
import { DateProps } from "./dates.types";
import { dateFormatter } from "@/utils/formaters";

export const Dates: React.FC<DateProps> = ({ initialDate, finalDate }) => {
  const infos = [
    {
      id: 0,
      title: "Início",
      date: dateFormatter.format(new Date(initialDate)),
    },
    {
      id: 1,
      title: "Fim",
      date: dateFormatter.format(new Date(finalDate)),
    },
  ];

  return (
    <View className="w-full flex flex-row items-center justify-between pt-2">
      {infos.map((info) => (
        <View className="flex flex-col gap-1" key={info.id}>
          <Text className="text-gray-600 text-sm">{info.title}</Text>
          <Text className="text-blue-100 text-md">{info.date}</Text>
        </View>
      ))}
    </View>
  );
};
