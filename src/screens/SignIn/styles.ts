import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 24px;
`;

export const Title = styled.Text`
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.black};
`;

export const Form = styled.View`
    width: 100%;
    align-items: center;
`;

export const WapperInput = styled.View`
    margin-bottom: 10px;
    width: 100%;
    margin-top: 25px;
`;


export const BoxButtom = styled.View`
    margin-top: 25px;
    
`
