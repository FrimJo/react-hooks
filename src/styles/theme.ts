/* eslint-disable import/order */
import { ThemeOptions } from '@material-ui/core'
import { Colors } from './colors'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Color = require('color')

export const THEME: ThemeOptions = {
  palette: {
    primary: {
      main: Colors.PurpleMountainsMajesty,
    },
    secondary: {
      main: Color(Colors.PurpleMountainsMajesty).lighten(0.6).string(),
      contrastText: Colors.PurpleMountainsMajesty,
    },
    error: {
      main: Colors.Contessa,
      contrastText: Colors.White,
    },
    success: {
      main: Colors.Cascade,
      contrastText: Colors.White,
    },
    background: { default: Colors.White },
    text: {
      primary: Colors.LimedSpruce,
    },
  },
  typography: {
    fontFamily: 'Oxygen',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    fontSize: 16,
    h1: {
      fontSize: '6rem',
      letterSpacing: -1.5,
      fontWeight: 100,
      textTransform: 'none',
      color: 'rgba(0, 0, 0, 0.82)',
      lineHeight: 1.25,
    },
    h2: {
      fontSize: '4.175rem',
      letterSpacing: -0.5,
      fontWeight: 100,
      textTransform: 'none',
      color: 'rgba(0, 0, 0, 0.82)',
      lineHeight: 1.25,
    },
    h3: {
      fontSize: '3rem',
      letterSpacing: 0.0,
      fontWeight: 300,
      textTransform: 'none',
      color: 'rgba(0, 0, 0, 0.82)',
      lineHeight: 1.25,
    },
    h4: {
      fontSize: '2.125rem',
      letterSpacing: 0.25,
      fontWeight: 300,
      textTransform: 'none',
      color: 'rgba(0, 0, 0, 0.82)',
      lineHeight: 1.5,
    },
    h5: {
      fontSize: '1.5rem',
      letterSpacing: 0,
      fontWeight: 300,
      textTransform: 'none',
      color: 'rgba(0, 0, 0, 0.82)',
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1.25rem',
      letterSpacing: 0.15,
      fontWeight: 400,
      textTransform: 'none',
      color: 'rgba(0, 0, 0, 0.82)',
      lineHeight: 1.5,
    },
    subtitle1: {
      fontSize: '1rem',
      letterSpacing: 0.15,
      fontWeight: 500,
      textTransform: 'none',
      color: 'rgba(0, 0, 0, 0.82)',
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: '0.875rem',
      letterSpacing: 0.1,
      fontWeight: 500,
      textTransform: 'none',
      color: 'rgba(0, 0, 0, 0.82)',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      letterSpacing: 0.5,
      fontWeight: 300,
      textTransform: 'none',
      color: 'rgba(0, 0, 0, 0.82)',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      letterSpacing: 0.25,
      fontWeight: 300,
      textTransform: 'none',
      color: 'rgba(0, 0, 0, 0.82)',
      lineHeight: 1.5,
    },
    button: {
      fontSize: '0.875rem',
      letterSpacing: 1.25,
      fontWeight: 400,
      textTransform: 'none',
      color: 'rgba(0, 0, 0, 0.82)',
      lineHeight: 1.5,
    },
    caption: {
      fontSize: '0.75rem',
      letterSpacing: 0.4,
      fontWeight: 300,
      textTransform: 'none',
      color: 'rgba(0, 0, 0, 0.82)',
      lineHeight: 1.5,
    },
    overline: {
      fontSize: '0.625rem',
      letterSpacing: 1.5,
      fontWeight: 300,
      textTransform: 'uppercase',
      color: 'rgba(0, 0, 0, 0.82)',
      lineHeight: 1.5,
    },
  },
}
