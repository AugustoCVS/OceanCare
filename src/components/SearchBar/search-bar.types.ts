import React from "react";

export type SearchBarProps = {
  placeholder: string;
  onChangeValue: (value: string) => void;
  value: string;
  icon?: React.ReactNode;
};
