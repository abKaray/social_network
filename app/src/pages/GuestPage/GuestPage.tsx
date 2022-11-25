import { useState, SyntheticEvent } from 'react';

import { AUTH_PAGE_NUMBER } from './constants';
import { Registration } from '../../modules/registration';
import { Authentication } from '../../modules/authentication';

import * as S from './GuestPage.styled';

export const GuestPage = () => {
  const [currentPage, setCurrentPage] = useState(AUTH_PAGE_NUMBER);

  const handleChangeTab = (_: SyntheticEvent, newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <S.Wrapper>
      <S.InnerWrapper>
        <S.Tabs value={currentPage} onChange={handleChangeTab} centered>
          <S.Tab label="Authentication" />
          <S.Tab label="Registration" />
        </S.Tabs>
        {currentPage === AUTH_PAGE_NUMBER ? <Authentication /> : <Registration />}
      </S.InnerWrapper>
    </S.Wrapper>
  );
};
