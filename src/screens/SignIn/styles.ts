import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 24px;
`;

export const BoxImage = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

export const Title = styled.Text`
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.black};
`;

export const WapperInput = styled.View`
    margin-bottom: 10px;
    width: 100%;
`;


export const BoxButtom = styled.View`
    margin-top: 10px;
`
