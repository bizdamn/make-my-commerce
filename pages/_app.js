import '../styles/css/index.css'
import '../styles/css/main.css'
import '../styles/css/menu.css'
import '../styles/css/style.css'
import '../styles/css/typography.css'
import '../styles/css/blogCSS/main.css'
import '../styles/css/blogCSS/screen.css'
import Head from 'next/head'
import { StoreProvider } from '../utils/Store';
import { SnackbarProvider } from 'notistack';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Font */}
        {/* <link rel="stylesheet" id="google-font-poppins-css" href="http://fonts.googleapis.com/css2?family=Poppins%3Awght%40400%3B500%3B600%3B700&display=swap&ver=979259718aef403a78681247a87def6c" type="text/css" media="all" /> */}
        {/* Font Awesome */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet" />
        {/* Google Fonts */}
        {/* <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" /> */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.0/mdb.min.css" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.0/mdb.min.js"></script>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> */}
      </Head>
      <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <StoreProvider>
          <Component {...pageProps} />
        </StoreProvider>
      </SnackbarProvider>
    </>
  )
}

export default MyApp
