import "./Footer.scss";
import { IconLink } from "@/components/Link/IconLink";

export const Footer = () => {
  return (
    <>
      <div className="footer__copyright">
        © 2025 <b>Devoteam</b> | <b>AI-driven tech consulting</b>
      </div>
      <div className="footer__social-media">
        <IconLink href="https://twitter.com/Devoteam" svg="svg/twitter.svg" alt="X" size="1.2rem" />
        <IconLink href="https://www.youtube.com/user/devoteam" svg="svg/youtube.svg" alt="youtube" size="1.5rem" />
        <IconLink href="https://www.linkedin.com/company/devoteam/" svg="svg/linkedin.svg" alt="linkedin" size="1.5rem" />
      </div>
    </>
  );
};
