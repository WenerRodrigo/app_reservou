import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TextInput)`
  flex: 1;
  width: 100%;
  min-height: 56px;
  max-height: 56px;
  ${({ theme }) => css`
    font-size: ${theme.font_size.sm}px;
    font-family: ${theme.font_family.regular};
    background-color: ${theme.colors.white};
    color: ${theme.colors.gray};
  `}
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 6px;
  padding: 16px;
`;

export const Error = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.font_family.regular};
    color: ${theme.colors.red};
  `}
`
