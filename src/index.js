import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { MoralisProvider } from "react-moralis";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
});
root.render(
  <React.StrictMode>
    <MoralisProvider
      appId="3zvmZ7CBMV1cVw9mIPnrtUiPYZHuHKkaVdDVNAVn"
      serverUrl="https://bexnvkjunxyf.usemoralis.com:2053/server"
    >
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </MoralisProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
