import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Store/Store";
import { toggleTheme } from "../../Store/Slice";

const ThemeToggle: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(toggleTheme())}>
      Toggle to {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
};

export default ThemeToggle;
