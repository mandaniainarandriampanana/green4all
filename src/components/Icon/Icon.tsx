type TIcon = { svg: string; alt: string; size?: string };
export const Icon = ({ svg, alt, size = "1rem" }: TIcon) => (
  <img src={svg} alt={alt} style={{ height: size, width: "auto" }} />
);
