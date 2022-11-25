import { styled } from '@mui/material/styles';

import { Button as MuiButton } from '../../Button';
import { TextField as MuiTextField } from '../../TextField';

export const Button = styled(MuiButton)`
  width: 100%;
  margin-top: 20px;
  height: 40px;
`;

export const TextField = styled(MuiTextField)`
  display: flex;
  margin-bottom: 12px;

  & label {
    color: ${({ theme }) => theme.palette.white.main};
  }

  & input {
    color: ${({ theme }) => theme.palette.white.main};
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: ${({ theme }) => theme.palette.white.main};
    }

    &:hover {
      & fieldset {
        border-color: red;
      }
    }
  }
`;
