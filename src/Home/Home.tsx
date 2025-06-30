import { Navigation } from "@/components/Navigation/Navigation";
import "./Home.scss";
import { Header } from "@/components/Header/Header";
import { Content } from "@/components/Content/Content";
import { Footer } from "@/components/Footer/Footer";

export const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <Header />
      </div>
      <div className="left--content">
        <Navigation />
      </div>
      <div className="right--content">Right content</div>
      <div className="content"><Content /></div>
      <div className="footer"><Footer /></div>
    </div>
  );
};
