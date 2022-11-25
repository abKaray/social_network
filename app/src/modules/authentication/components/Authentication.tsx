import { useState } from 'react';
import { useFormik, FormikProvider } from 'formik';

import { FormLoggin } from '../../../components/forms/FormLoggin';

import { useAuthenticationApi } from '../api/useAuthenticationApi';
import { HomePageFormSchema } from '../../../utils/homePageValidationSchema';

import * as S from './Authentication.styled';

export const Authentication = () => {
  const [userInfo, setUserInfo] = useState(null);

  useAuthenticationApi({ params: userInfo, enabled: !!userInfo });

  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    validationSchema: HomePageFormSchema,
    onSubmit: (values, { resetForm }) => {
      // setUserInfo(values);
      console.log('values_AUTH :>> ', values);
      resetForm();
      setUserInfo(null);
    },
  });

  return (
    <>
      <S.Title>Authentication</S.Title>
      <FormikProvider value={formik}>
        <FormLoggin formik={formik} />
      </FormikProvider>
    </>
  );
};
