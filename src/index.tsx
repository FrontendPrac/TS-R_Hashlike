import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./Global-style";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyle />
        <App />
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
