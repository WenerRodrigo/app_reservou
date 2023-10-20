import { useAuth } from '../../hooks/useAuth';
import * as S from './styles';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native'
import { Input } from '../../components/Input';
import { Image, Keyboard, ScrollView, TouchableWithoutFeedback, View } from 'react-native';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


type IFormData = {
    email: string;
    password: string;
}


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

    const handleSignUp = () => {
        navigation.navigate("SignUp")
    }

    const handleFormSubmit = (data: IFormData) => {

        console.log('Salvando Dados', data);

        signIn();
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <S.Container>
                <S.BoxImage>
                    <Image
                        source={require('../../../assets/icon.png')}
                        style={{ width: 200, height: 130, marginBottom: 40 }}
                        resizeMode='contain'
                    />
                </S.BoxImage>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    alwaysBounceVertical={false}
                >
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
                                    autoCorrect={false}
                                    autoCapitalize="none"
                                    value={value}
                                    onChangeText={onChange}
                                    type='password'
                                    error={errors.password && errors.password.message}
                                />
                            )}
                        />
                        <S.Title>Esqueceu sua senha ? Clique aqui</S.Title>
                    </S.WapperInput>
                    <S.BoxButtom>
                        <Button title="Entrar" onPress={handleSubmit(handleFormSubmit)} />
                    </S.BoxButtom>
                    <S.BoxButtom>
                        <Button title="Criar Conta" type='secondary' onPress={handleSignUp} />
                    </S.BoxButtom>
                </ScrollView>
            </S.Container>
        </TouchableWithoutFeedback>
    );
}



