import '../styles/globals.css'
import { ThemeProvider, createTheme, Container } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={darkTheme}>
    <Container sx={(theme) => ({
      backgroundColor: theme.palette.grey[800],
      width: '100vw',
      height: '100vh'
    })}
    >
      <Component {...pageProps} />
    </Container>
  </ThemeProvider>
}

export default MyApp
