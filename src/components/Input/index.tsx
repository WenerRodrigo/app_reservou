import { TextInput, TextInputProps, View } from "react-native";
import { useTheme } from "styled-components/native";
import * as S from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import theme from "../../theme";

type InputType =
  | "text"
  | "password"
  | "date"
  | "datetime"
  | "time"
  | "document"
  | "email"
  | "number"
  | "search"
  | "tel"
  | "url";

type IProps = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
  error?: String | boolean;
  type?: InputType;
};

export function Input({ inputRef, error, type, ...rest }: IProps) {
  const [showPassword, setShowPassword] = useState(false);

  const { colors } = useTheme();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <S.Container
        style={{
          borderColor: error ? colors.red : colors.gray,
        }}
        ref={inputRef}
        placeholderTextColor={colors.gray}
        secureTextEntry={type === "password" && !showPassword}
        {...rest}
      />
      {type === "password" && (
        <View
          style={{
            position: "absolute",
            top: 0,
            right: 9,
            bottom: 0,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            paddingRight: 2,
          }}
          onTouchEnd={togglePasswordVisibility}
        >
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={24}
            color={showPassword ? theme.colors.yellow : theme.colors.gray}
          />
        </View>
      )}
      {error && <S.Error>{error}</S.Error>}
    </>
  );
}
