import { Input } from "@/components/Input/Input";
import { Discussion } from "@/components/Discussion/Discussion";

import "./Content.scss";

export const Content = () => {
  return (
    <div className="content-root">
      <Discussion />
      <Input />
    </div>
  );
};
