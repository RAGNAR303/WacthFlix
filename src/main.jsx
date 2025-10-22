import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  </StrictMode>
);
