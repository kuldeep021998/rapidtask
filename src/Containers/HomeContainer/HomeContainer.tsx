import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Home from "../../Components/Home/Home";
import img1 from "../../assets/blog.png";
import img2 from "../../assets/building.png";
import img3 from "../../assets/shopping-bag.png";
import img4 from '../../assets/portfolio.png'
const HomeContainer: React.FC = () => {
  const arr: any = [
    { pic: img2, label: "Local Business" },
    { pic: img3, label: "Online Store" },
    { pic: img1, label: "Blogging" },
    { pic: img4, label: "Portfolio" },
  ];
  return (
    <>
      <Header />
      <Home arr={arr} />
      <Footer />
    </>
  );
};

export default HomeContainer;
