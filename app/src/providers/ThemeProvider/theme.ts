import { createTheme, ThemeOptions, PaletteColor, PaletteColorOptions } from '@mui/material/styles';
import { colors } from '../../styles/colors';

declare module '@mui/material/styles' {
  interface Palette {
    red: PaletteColor;
    black: PaletteColor;
    white: PaletteColor;
    greyLight: PaletteColor;
  }

  interface PaletteOptions {
    red?: PaletteColorOptions;
    black?: PaletteColorOptions;
    white?: PaletteColorOptions;
    greyLight?: PaletteColorOptions;
  }
}

// eslint-disable-next-line import/no-mutable-exports
export let theme = createTheme({
  palette: {
    primary: {
      main: colors.white,
    },
    secondary: {
      main: '#0000ff',
    },
    red: {
      main: colors.red,
    },
    black: {
      main: colors.black,
    },
    white: {
      main: colors.white,
    },
    greyLight: {
      main: colors.greyLight,
    },
    // error: {
    //   main: colors.thunderbird,
    // },
    // text: {
    //   primary: colors.blueBayoux,
    //   secondary: colors.nightRider,
    // },
    // white: {
    //   main: colors.white,
    // },
    // darkGrey: {
    //   main: colors.darkGrey,
    // },
    // whiteSmoke: {
    //   main: colors.whiteSmoke,
    // },
    // whiteSmoke2: {
    //   main: colors.whiteSmoke2,
    // },
    // echoBlue: {
    //   main: colors.echoBlue,
    // },
    // blueBayoux: {
    //   main: colors.blueBayoux,
    // },
    // nightRider: {
    //   main: colors.nightRider,
    // },
    // thunderbird: {
    //   main: colors.thunderbird,
    // },
    // mediumBlue: {
    //   main: colors.mediumBlue,
    // },
    // periwinkle: {
    //   main: colors.periwinkle,
    // },
    // zircon: {
    //   main: colors.zircon,
    // },
    // solitude: {
    //   main: colors.solitude,
    // },
    // silver: {
    //   main: colors.silver,
    // },
    // clearDay: {
    //   main: colors.clearDay,
    // },
  },
});

theme = createTheme(theme, {
  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
    allVariants: {
      // color: theme.palette.blueBayoux.main,
    },
    subtitle1: {
      fontSize: '0.875rem',
    },
    subtitle2: {
      // color: theme.palette.black.main,
      fontWeight: 300,
      fontSize: '0.8125rem',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.125rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1rem',
      fontWeight: 700,
    },
    h5: {
      fontSize: '0.875rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '0.8125rem',
    },
    button: {
      fontSize: '0.875rem',
      // color: theme.palette.white.main,
      fontWeight: 700,
      textTransform: 'none',
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        fieldset: {
          borderColor: '#fff',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        fieldset: {
          borderColor: '#fff',
        },
      },
    },
  },
  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: {
  //       body: {
  //         overflowX: 'hidden',
  //       },
  //       ul: {
  //         margin: 0,
  //         padding: 0,
  //         listStyleType: 'none',
  //       },
  //     },
  //   },
  //   MuiSvgIcon: {
  //     defaultProps: {
  //       color: 'secondary',
  //     },
  //     styleOverrides: {
  //       colorPrimary: theme.palette.thunderbird.main,
  //     },
  //   },
  //   MuiCard: {
  //     styleOverrides: {
  //       root: {
  //         boxShadow: '2px 3px 10px 0px rgba(205, 206, 217, 0.5)',
  //         borderRadius: '10px',
  //         border: 'none',
  //       },
  //     },
  //   },
  //   MuiCheckbox: {
  //     styleOverrides: {
  //       root: {
  //         padding: 0,
  //       },
  //     },
  //     defaultProps: {
  //       disableRipple: true,
  //     },
  //   },
  //   MuiFormControlLabel: {
  //     styleOverrides: {
  //       root: {
  //         marginRight: 0,
  //       },
  //     },
  //   },
  //   MuiAppBar: {
  //     styleOverrides: {
  //       colorPrimary: {
  //         backgroundColor: theme.palette.mediumBlue.main,
  //       },
  //     },
  //   },
  //   MuiDialogContent: {
  //     styleOverrides: {
  //       root: {
  //         padding: '16px 24px',
  //       },
  //     },
  //   },
  //   MuiDialogTitle: {
  //     styleOverrides: {
  //       root: {
  //         padding: '16px 24px 0 24px',
  //       },
  //     },
  //   },
  //   MuiInputBase: {
  //     styleOverrides: {
  //       root: {
  //         color: theme.palette.black.main,
  //       },
  //     },
  //   },
  //   MuiTextField: {
  //     defaultProps: {
  //       color: 'secondary',
  //     },
  //   },
  //   MuiSelect: {
  //     defaultProps: {
  //       color: 'secondary',
  //     },
  //   },
  //   MuiFormLabel: {
  //     defaultProps: {
  //       color: 'secondary',
  //     },
  //   },
  //   MuiButton: {
  //     defaultProps: {
  //       variant: 'contained',
  //       color: 'secondary',
  //       disableRipple: true,
  //       disableElevation: true,
  //     },
  //     styleOverrides: {
  //       root: {
  //         padding: '5px 25px',
  //       },
  //       outlined: {
  //         padding: '5px 25px',
  //       },
  //     },
  //   },
  //   MuiTabs: {
  //     defaultProps: {
  //       textColor: 'secondary',
  //       indicatorColor: 'secondary',
  //     },
  //   },
  //   MuiCircularProgress: {
  //     defaultProps: {
  //       color: 'secondary',
  //     },
  //   },
  //   MuiLink: {
  //     defaultProps: {
  //       color: 'secondary',
  //       underline: 'hover',
  //     },
  //   },
  //   MuiPaper: {
  //     defaultProps: {
  //       elevation: 0,
  //     },
  //   },
  //   MuiAutocomplete: {
  //     styleOverrides: {
  //       listbox: {
  //         backgroundColor: theme.palette.mediumBlue.main,
  //         border: `1px solid ${theme.palette.darkGrey.main}`,
  //         borderRadius: '4px',
  //       },
  //       popper: {
  //         boxShadow:
  //           '0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)',
  //       },
  //     },
  //   },
  //   MuiMenu: {
  //     styleOverrides: {
  //       list: {
  //         backgroundColor: theme.palette.mediumBlue.main,
  //         border: `1px solid ${theme.palette.darkGrey.main}`,
  //       },
  //     },
  //   },
  //   MuiButtonBase: {
  //     defaultProps: {
  //       disableRipple: true,
  //     },
  //   },
  // },
} as ThemeOptions);
