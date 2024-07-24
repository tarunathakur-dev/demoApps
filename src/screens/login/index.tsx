import React from 'react';
import { I18nManager, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Controller, useForm } from 'react-hook-form';
import ButtonField from '../../generic/buttonField';
import TextInputField from '../../generic/textInputField';
import { MainContainer, TitleText, Container, ImageContainer } from './login.style';
import { EMAIL_REGEX, PASSWORD_REGEX } from '../../utils/regex';
import RNRestart from 'react-native-restart';
import i18n from '../../locale/i18Next';
import base64 from 'react-native-base64';
import { SCREEN_NAMES } from '../../route/rootStack';
import { useAppDispatch } from '../../redux/store';
import { setLanguage } from '../../redux/userProfile';
import { setUser } from '../../redux/userProfile';

interface Props {
  navigation: any;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
  });
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const handleUserSubmit = (data: any) => {
    dispatch(
      setUser({ email: data.email, password: base64.encode(data.password) }),
    );
    navigation.reset({
      index: 0,
      routes: [{ name: SCREEN_NAMES.DASHBOARD }],
    });
  };

  const onPress = () => {
    let language = 'en';
    let allowRTL = false;
    if (i18n.language === 'en') {
      language = 'ar';
      allowRTL = true;
    }
    I18nManager.allowRTL(allowRTL);
    I18nManager.forceRTL(allowRTL);
    i18n.changeLanguage(language);
    dispatch(setLanguage(language));
    setTimeout(() => {
      RNRestart.restart();
    }, 50);
  };
  return (
    <MainContainer>
      <Container>
        <TouchableOpacity onPress={onPress}>
          <ImageContainer source={require('../../assests/icons/language.png')} />
        </TouchableOpacity>
      </Container>
      <TitleText>{t('login')}</TitleText>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInputField
            autoFocus
            placeholder={t('email')}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="email-address"
            autoCapitalize="none"
            error={errors.email?.message}
          />
        )}
        name="email"
        rules={{
          required: t('emailIsRequired'),
          pattern: { value: EMAIL_REGEX, message: t('emailValidation') },
        }}
        defaultValue=""
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInputField
            placeholder={t('password')}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
            error={errors.password?.message}
            showError
          />
        )}
        name="password"
        rules={{
          required: t('passwordIsRequired'),
          pattern: {
            value: PASSWORD_REGEX,
            message: t('passwordValidation'),
          },
        }}
        defaultValue=""
      />
      <ButtonField
        disabled={!isValid}
        title={t('login')}
        onPress={handleSubmit(handleUserSubmit)}
      />
    </MainContainer>
  );
};

export default LoginScreen;
