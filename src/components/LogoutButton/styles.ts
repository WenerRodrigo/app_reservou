import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
    flex: 1;
    flex-direction: row;
    gap: 2px;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.black};
`;