import { useAuth } from '../../hooks/useAuth';
import * as S from './styles';
import { Button } from 'react-native'

export function SignIn() { 
    const { signIn } = useAuth();

    return (
        <S.Container>
            <S.Title>Tela de Login</S.Title>
            <Button title="Entrar" onPress={signIn} />
        </S.Container>
    );
}



