import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import * as S from "./styles";

type IProps = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
  error?: String | boolean;
};



export function Input({ inputRef, error, ...rest }: IProps) {
  const { colors } = useTheme();

  return (
    <>
      <S.Container
        style={{
          borderColor: error ? colors.red : colors.gray,
        }}
        ref={inputRef}
        placeholderTextColor={colors.gray}
        {...rest}
      />
      {error && <S.Error>{error}</S.Error>}
    </>
  );
}
