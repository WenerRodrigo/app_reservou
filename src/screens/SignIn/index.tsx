import { useAuth } from '../../hooks/useAuth';
import * as S from './styles';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native'
import { Input } from '../../components/Input';
import { Image } from 'react-native';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


export function SignIn() {
    const { signIn } = useAuth();
    const navigation = useNavigation();

    const schema = yup.object().shape({
        email: yup.string().email('Email inválido').required('Campo obrigatório'),
        password: yup.string().required('Campo obrigatório').min(6, 'Mínimo de 6 caracteres')
    })

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const handleSignUP = () => {
        navigation.navigate("SignUp")
    }

    return (
        <S.Container>
            <S.Form>
                <Image
                    source={require('../../../assets/icon.png')}
                    style={{ width: '40%', height: '40%' }}
                    resizeMode='contain'
                />
                <S.WapperInput>
                    <S.Title>E-mail</S.Title>
                    <Controller
                        name="email"
                        defaultValue=""
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder="E-mail"
                                keyboardType="email-address"
                                autoCorrect={false}
                                autoCapitalize="none"
                                value={value}
                                onChangeText={onChange}
                                error={errors.email && errors.email.message}
                            />
                        )}
                    />
                </S.WapperInput>

                <S.WapperInput>
                    <S.Title>Senha</S.Title>
                    <Controller
                        name="password"
                        defaultValue=""
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <Input
                                placeholder="Senha"
                                secureTextEntry
                                autoCorrect={false}
                                autoCapitalize="none"
                                value={value}
                                onChangeText={onChange}
                                error={errors.password && errors.password.message}
                            />
                        )}
                    />
                    <S.Title>Esqueceu sua senha ? Clique aqui</S.Title>
                </S.WapperInput>
            </S.Form>
            <Button title="Entrar" onPress={handleSubmit(signIn)} />
            <Button title="Criar Conta" type='secondary' onPress={handleSignUP} />
        </S.Container>
    );
}



