import { LogoDevoteam } from "@/components/Logos/LogoDevoteam";

import "./Header.scss";
import { Menu } from "@/components/Menu/Menu";

export const Header = () => {
  return (
    <div className="header--root">
      <LogoDevoteam />
      <Menu />
    </div>
  );
};
