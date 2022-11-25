import { useState } from 'react';
import { useFormik, FormikProvider } from 'formik';
import { useQueryClient } from 'react-query';

import { FormLoggin } from '../../../components/forms/FormLoggin';

import { useRegistrationApi } from '../api/registrationApi';
import { HomePageFormSchema } from '../../../utils/homePageValidationSchema';

import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { useAuth } from '../../../hooks/useAuth';
import { BACKEND_TOKEN } from '../../../constants/localStorage';

import * as S from './Registration.styled';

export const Registration = () => {
  const [userInfo, setUserInfo] = useState(null);
  const { setAuthStatus, setCurrentToken } = useAuth();
  const { setValue: setLocalStorage } = useLocalStorage(BACKEND_TOKEN);

  useRegistrationApi({
    params: userInfo,
    enabled: !!userInfo,
    onSuccess: async (response: any) => {
      const {
        data: { token, refreshToken },
      } = response;
      console.log('response :>> ', response);
      await setLocalStorage({ token, refreshToken });
      setAuthStatus(true);
      setCurrentToken(token);
    },
  });

  const queryClient = useQueryClient();

  console.log('queryClient :>> ', queryClient);

  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    validationSchema: HomePageFormSchema,
    onSubmit: (values: any, { resetForm }) => {
      setUserInfo(values);
      resetForm();
      setUserInfo(null);
    },
  });

  return (
    <>
      <S.Title>Registration</S.Title>
      <FormikProvider value={formik}>
        <FormLoggin formik={formik} />
      </FormikProvider>
    </>
  );
};
