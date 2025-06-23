import { ButtonIcon } from "@/components/Button/ButtonIcon";
import { Recent } from "@/components/Recent/Recent";

import "./navigation.scss";

export const Navigation = () => {
  return (
    <div className="navigation">
      <ButtonIcon action={() => console.log("nem")} icon="svg/edit.svg">
        Nouvelle discussion
      </ButtonIcon>
      <Recent />
    </div>
  );
};
