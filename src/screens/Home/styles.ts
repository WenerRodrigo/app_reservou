import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.write};
`;

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #000;
`;


export const BoxButton = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 20px 20px 0 20px;
`;

export const Separator = styled.View`
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.gray};
    margin: 35px 0;
`;

export const TitleService = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.gray};
    margin-left: 20px;
    margin-bottom: 15px;
`;
