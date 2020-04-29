import Header from '../components/Header'
import { ThemeProvider } from 'emotion-theming'

const theme = {
    colors: {
        primary: '#ff0000'

    }
}
 

function MyApp({ Component, pageProps }) {
    return (
        <>
        <ThemeProvider theme = {theme}>
        <Header />
        <Component {...pageProps}/>
        </ThemeProvider>
        </>
    )
  }
  
  export default MyApp