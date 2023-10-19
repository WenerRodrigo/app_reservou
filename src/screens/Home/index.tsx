import { useAuth } from '../../hooks/useAuth';
import * as S from './styles';
import { Button } from 'react-native'

export function Home() { 
    const { signOut } = useAuth();

    return (
        <S.Container>
            <S.Title>Olá, React Native</S.Title>
            <Button title="Sair" onPress={signOut} />
        </S.Container>
    );
}



