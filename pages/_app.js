import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Component {...pageProps} />
      <footer>
        <p>© 2018 Gandalf</p>
      </footer>
    </>
  )
}

export default MyApp
