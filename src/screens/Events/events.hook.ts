import { useState } from "react";

export const useEvents = () => {
  const [searchEvent, setSearchEvent] = useState<string>("");

  const handleSearchEvent = (value: string): void => {
    setSearchEvent(value);
  };

  return {
    states: {
      searchEvent,
    },
    actions: {
      handleSearchEvent,
    },
  };
};
