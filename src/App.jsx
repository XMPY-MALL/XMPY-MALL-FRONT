import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { css, Global } from "@emotion/react";

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  /* #root flex 중앙정렬 제거 */
  #root {
    width: 100%;
    height: 100%;
  }
`;

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Global styles={globalStyle}/> */}
      <Global styles={globalStyle} />
      <BrowserRouter>
        <AppRoutes />
        {/* 1. AppRoutes로 먼저 들어감 */}
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
