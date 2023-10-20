import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "primary" | "secondary";

type IProps = {
  type?: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<IProps>`
  flex: 1;
  height: 60px;
  max-height: 60px;
  width: 100%;
  background-color: ${({ theme, type }) => type === "primary" ? theme.colors.yellow : theme.colors.white};
  border-radius: 10px;
  border: 1px solid ${({ theme, type }) => type === "primary" ? theme.colors.yellow : theme.colors.gray};
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const Title = styled.Text<IProps>`
  font-size: ${({ theme }) => theme.font_size.md}px;
  font-family: ${({ theme }) => theme.font_family.regular};
  color: ${({ theme, type }) => type === "primary" ? theme.colors.white : theme.colors.gray};
`;
