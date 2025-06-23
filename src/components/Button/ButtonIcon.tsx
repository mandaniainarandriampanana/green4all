import { Button, type TButton } from "@/components/Button/Button";

import "./ButtonIcon.scss";
import { getConditionalClassName } from "@/helpers/conditionalClassNameHelper";
import { Icon } from "@/components/Icon/Icon";

type TButtonIcon = TButton & { icon: string };

export const ButtonIcon = (props: TButtonIcon) => {
  const { children, icon } = props;
  return (
    <Button {...props} className={getConditionalClassName(!children, 'button-icon__text-less')}>
      <div className="button-icon">
        <Icon svg={icon} size="1rem" alt="Edit" />
        {children && <div className="button-icon__icon-text">{children}</div>}
      </div>
    </Button>
  );
};
