export type SecureInputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  handleShowPassword: () => void;
  isSecurePassword: boolean;
}