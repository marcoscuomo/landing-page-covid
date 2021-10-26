import GlobalStyle from '../styles/Global';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}
