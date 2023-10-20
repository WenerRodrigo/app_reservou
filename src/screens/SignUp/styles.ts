import styled from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.write};
    padding: 20px;
`;

export const BoxImage = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 70px;
`;

export const Title = styled.Text`
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 5px;
`;

export const WapperInput = styled.View`
    margin-bottom: 10px;
    width: 100%;
`;

export const BoxButtom = styled.View`
    margin-top: 25px;
`