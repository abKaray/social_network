import { styled } from '@mui/material/styles';

import { Tab as MuiTab, Tabs as MuiTabs } from '../../components/tabs';

export const Wrapper = styled('div')`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    to top right,
    ${({ theme }) => theme.palette.black.main} 30%,
    ${({ theme }) => theme.palette.red.main} 270%
  );
`;

export const InnerWrapper = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  min-height: 300px;
  padding: 20px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.greyLight.main};
  border: 3px solid ${({ theme }) => theme.palette.red.main};
  transform: translate(-50%, -50%);
`;

export const Tab = styled(MuiTab)`
  border-radius: 6px;
  color: ${({ theme }) => theme.palette.white.main};

  &.Mui-selected {
    color: ${({ theme }) => theme.palette.red.main};
  }
`;

export const Tabs = styled(MuiTabs)`
  & > .MuiTabs-scroller > .MuiTabs-indicator {
    background-color: ${({ theme }) => theme.palette.red.main};
  }
`;
