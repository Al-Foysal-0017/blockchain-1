import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { MoralisProvider } from "react-moralis";
import MainLayout from "./components/MainLayout";

let theme = createMuiTheme({palette: {type: 'dark'}});
theme = responsiveFontSizes(theme);

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

function App() {
  return (
    <MoralisProvider 
    // appId="XR6K7S6GxegWWbJ0B0IZDVjDe6eBU4EubrofAnCZ" 
    // serverUrl="https://p0slxlqxyyni.usemoralis.com:2053/server"
    appId={APP_ID}
    serverUrl={SERVER_URL}
    >
      <ThemeProvider theme={theme}>
        <MainLayout />
      </ThemeProvider>
    </MoralisProvider>
  );
}

export default App;
