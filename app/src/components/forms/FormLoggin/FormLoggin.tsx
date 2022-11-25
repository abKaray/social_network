import { FC } from 'react';
import { Form, FormikProps } from 'formik';

import * as S from './FormLoggin.styled';

interface FormValues {
  name: string;
  password: string;
}

interface Props {
  formik: FormikProps<FormValues>;
}

export const FormLoggin: FC<Props> = ({ formik }) => {
  return (
    <Form onSubmit={formik.handleSubmit}>
      <S.TextField
        id="name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        label="Your name"
        error={!!formik.errors.name}
        helperText={formik.touched.name && formik.errors.name}
      />
      <S.TextField
        id="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        type="password"
        label="Your password"
        error={!!formik.errors.password}
        helperText={formik.touched.password && formik.errors.password}
      />
      <S.Button type="submit" variant="contained">
        Authentication
      </S.Button>
    </Form>
  );
};
