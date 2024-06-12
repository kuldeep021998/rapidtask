import { useSelector } from "react-redux";
import {
  ThemeProvider,
  createGlobalStyle,
  DefaultTheme,
} from "styled-components";
import { RootState } from "../../Store/Store";
import ThemeToggle from "../ThemeToggle/ThemeToggle.tsx";

const Task: React.FC = () => {
  const lightTheme: DefaultTheme = {
    background: "#fff",
    color: "#000",
  };

  const darkTheme: DefaultTheme = {
    background: "#333",
    color: "#fff",
  };

  const theme = useSelector((state: RootState) => state.theme.theme);

  const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
  }
`;

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle theme={theme === "light" ? lightTheme : darkTheme} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "150px",
          }}
        >
          <ThemeToggle />
        </div>
      </ThemeProvider>
    </>
  );
};

export default Task;
