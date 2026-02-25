import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { css, Global } from "@emotion/react";

// 전역 스타일 초기화
const globalStyle = css`
  /* 모든 태그 초기화 */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* index.html에 있는 id=root div */
  #root {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
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
