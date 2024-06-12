import bgImage from "../../assets/mountain-lake_1417-1680.jpg";
import "./Home.css";
import img1 from "../../assets/photo-1570215171323-4ec328f3f5fa.avif";
import img2 from "../../assets/photo-1581092583537-20d51b4b4f1b.avif";
import img3 from "../../assets/premium_photo-1678453147380-64286f760859.avif";
interface HomeProps {
  arr: any;
}
const Home: React.FC<HomeProps> = ({ arr }) => {
  return (
    <>
      <div className="homecontainer">
        <img src={bgImage} className="homecontainerImg" />

        <div className="homecontainer1">
          <h1 className="homecontainer-head">Your Idea Matters</h1>
          <p className="homecontainer-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            facilis nobis exercitationem. Animi dolore cumque odit pariatur
            perspiciatis maiores ad placeat illo omnis deleniti, atque suscipit
            quisquam unde incidunt doloribus.
          </p>
          <button className="homecontainer-btn">Make a Website</button>
        </div>
      </div>

      <div className="homecontainer2">
        {arr.map((item: any, index: number) => {
          return (
            <div key={index} className="homecontainer2Div">
              <img className="homecontainer2Img" src={item.pic} />
              <div className="homecontainer2Label">{item.label}</div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos optio similique vel sed ullam. Labore, saepe
                explicabo laboriosam natus voluptatibus, assumenda, iusto cumque
                veniam nisi accusantium aperiam necessitatibus aut suscipit?
              </div>
            </div>
          );
        })}
      </div>

      <div className="homecontainer3">
        <h1 className="homecontainer-head">Our Services</h1>

        <div className="homecontainer31">
          <img src={img1} className="homecontainer3Img" />
          <img src={img2} className="homecontainer3Img" />
          <img src={img3} className="homecontainer3Img" />
        </div>
      </div>
    </>
  );
};

export default Home;
