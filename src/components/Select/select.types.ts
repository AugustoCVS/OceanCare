
export type SelectProps = {
  selectedValue: string;
  onChangeValue: (itemValue: string) => void;
  placeholder?: string;
  isInvalid?: boolean,
  errorMessage?: string,
  children: React.ReactNode;
};
