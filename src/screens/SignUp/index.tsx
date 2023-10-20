
import * as S from "./styles";
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { Feather } from "@expo/vector-icons";
import theme from "../../theme";
import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';


type IFormData = {
    name: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

export function SignUp() {
    const navigation = useNavigation();

    const schema = yup.object().shape({
        name: yup.string().required('Campo obrigatório'),
        email: yup.string().email('Email inválido').required('Campo obrigatório'),
        phone: yup.string().required('Campo obrigatório'),
        password: yup.string().required('Campo obrigatório').min(6, 'Mínimo de 6 caracteres'),
        confirmPassword: yup.string().required('Campo obrigatório').min(6, 'Mínimo de 6 caracteres')
    })

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const handleOnBack = () => {
        navigation.goBack()
    }

    const handleFormSubmit = (data: IFormData) => {
        console.log('Dados do formulário:', data);

        handleOnBack();
    }


    return (
        <S.Container>
            <TouchableOpacity
                onPress={handleOnBack}
                style={{ position: 'absolute', left: 15, top: 40 }}
            >
                <Feather name="chevron-left" size={32} color={theme.colors.yellow} />
            </TouchableOpacity>
            <S.BoxImage>
                <Image
                    source={require('../../../assets/icon.png')}
                    style={{ width: 200, height: 130, marginBottom: 50 }}
                    resizeMode='contain'
                />
            </S.BoxImage>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingBottom: getBottomSpace() + 20,

                }}
                alwaysBounceVertical={false}
                showsVerticalScrollIndicator={false}
            >
                <View>
                    <S.WapperInput>
                        <S.Title>Nome</S.Title>
                        <Controller
                            name="name"
                            defaultValue=""
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    placeholder="Nome"
                                    autoCorrect={false}
                                    autoCapitalize="none"
                                    value={value}
                                    onChangeText={onChange}
                                    error={errors.name && errors.name.message}
                                />
                            )}
                        />
                    </S.WapperInput>

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
                        <S.Title>Telefone</S.Title>
                        <Controller
                            name="phone"
                            defaultValue=""
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    placeholder="Telefone"
                                    keyboardType="phone-pad"
                                    autoCorrect={false}
                                    autoCapitalize="none"
                                    value={value}
                                    onChangeText={onChange}
                                    error={errors.phone && errors.phone.message}
                                />
                            )}
                        />
                    </S.WapperInput>

                    <S.WapperInput>
                        <S.Title>Criar Senha</S.Title>
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
                                    type="password"
                                    error={errors.password && errors.password.message}
                                />
                            )}
                        />
                    </S.WapperInput>

                    <S.WapperInput>
                        <S.Title>Confirmar Senha</S.Title>
                        <Controller
                            name="confirmPassword"
                            defaultValue=""
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    placeholder="Confirmar Senha"
                                    autoCorrect={false}
                                    autoCapitalize="none"
                                    value={value}
                                    onChangeText={onChange}
                                    type="password"
                                    error={errors.confirmPassword && errors.confirmPassword.message}
                                />
                            )}
                        />
                    </S.WapperInput>
                </View>
                <S.BoxButtom>
                    <Button title="Criar Conta" onPress={handleSubmit(handleFormSubmit)} />
                </S.BoxButtom>
            </ScrollView>
        </S.Container>
    )
}