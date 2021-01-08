import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
// import "../styles/custom-semantic.css"; // the file that contains custom styling

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
