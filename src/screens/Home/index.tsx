import { useAuth } from '../../hooks/useAuth';
import theme from '../../theme';
import * as S from './styles';
import { Image, Button, View } from 'react-native'

export function Home() {
    const { signOut } = useAuth();

    return (
        <S.Container>
                <Image source={require('../../../assets/maps.png')}
                    style={{ width: '100%' }}
                    resizeMode='cover'
                />

                <S.BoxButton>
                    <Button
                        title='Ativar o GPS'
                        color={theme.colors.yellow}
                    />
                </S.BoxButton>

                <S.Separator />

                <S.TitleService>Serviços e Reservas Próximos</S.TitleService>

                <Image source={require('../../../assets/cards.png')}
                    style={{ width: '100%' , marginLeft: 8}}
                    resizeMode='cover'
                />

                <S.Separator />

                <S.TitleService>Explore</S.TitleService>

                <Image source={require('../../../assets/cards_icons.png')}
                    style={{ width: '90%', marginLeft: 20 }}
                    resizeMode='cover'
                />
                
        </S.Container>
    );
}



