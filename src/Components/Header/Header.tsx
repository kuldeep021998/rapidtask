import "./Header.css";
import logo from "../../assets/c6503b96-0f04-473f-95e5-5b699f2eb247.jpg";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../Store/Store";
import { useSelector } from "react-redux";
const Header: React.FC = () => {
  const navigate = useNavigate();
  const labelArr: string[] = ["Home", "Task", "Contact Us"];

  const handleNavigation = (i: number) => {
    if (i == 0) {
      navigate("/");
    } else if (i === 1) {
      navigate("/task");
    } else if (i === 2) {
      navigate("/contact-us");
    }
  };

  const theme = useSelector((state: RootState) => state.theme.theme);
  return (
    <>
      <div className="headerContainer1">
        <div style={{ color: "#fff" }} className="headerContainer-sublabel">
          Register
        </div>
        <div style={{ color: "#fff" }} className="headerContainer-sublabel">
          Login
        </div>
      </div>
      <div className="headerContainer">
        <img src={logo} className="headerContainer-img" alt="logo" />
        <div className="headerContainer-sub">
          {labelArr.map((label, index) => {
            return (
              <div
                onClick={() => handleNavigation(index)}
                key={index}
                className="headerContainer-sublabel"
                style={theme === "light" ? { color: "#000" } : {}}
              >
                {label}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Header;
