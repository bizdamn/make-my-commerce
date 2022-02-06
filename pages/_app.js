import '../styles/css/index.css'
import '../styles/css/main.css'
import '../styles/css/menu.css'
import '../styles/css/style.css'
import '../styles/css/typography.css'
import '../styles/css/blogCSS/main.css'
import '../styles/css/blogCSS/screen.css'
import '../styles/css/documentation/main.css'
import Head from 'next/head'
import { StoreProvider } from '../utils/Store';
import { SnackbarProvider } from 'notistack';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Font Awesome */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet" />
        {/* MDB */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.0/mdb.min.css" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.10.0/mdb.min.js"></script>
        {/* Lottie Files */}
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        {/* Documentation */}
        {/* <link  href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.2/styles/atom-one-dark.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.8/highlight.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.2/umd/popper.min.js" ></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/smooth-scroll/16.1.3/smooth-scroll.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.10.2/simple-lightbox.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gumshoe/5.1.1/gumshoe.min.js"></script> */}


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
