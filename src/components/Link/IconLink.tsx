import { Icon, type TIcon } from "@/components/Icon/Icon";

type TIconLink = TIcon & { href: string };

export const IconLink = (props: TIconLink) => {
  const { href } = props;
  return (
    <a href={href}>
      {" "}
      <Icon {...props} />
    </a>
  );
};
