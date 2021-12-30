import '../styles/globals.css'
import { ThemeProvider, createTheme, Container } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={darkTheme}>
    {/* <Container sx={(theme) => ({
      backgroundColor: theme.palette.grey[800],
      height: 'auto',
      color: 'white'
    })}
    > */}
      <Component {...pageProps} />
    {/* </Container> */}
  </ThemeProvider>
}

export default MyApp
