import { ButtonIcon } from "@/components/Button/ButtonIcon";
import "./Input.scss";
import { Icon } from "@/components/Icon/Icon";

export const Input = () => {
  return (
    <div className="chat-input">
      <textarea placeholder="Posez ici votre question..." />
      <label htmlFor="files">
        <Icon
          svg="svg/attach_file.svg"
          size="1.3rem"
          alt="ajouter un fichier"
        />
        <input type="file" id="files" name="files" />
      </label>
      <ButtonIcon icon="svg/send.svg" action={() => console.log("send")} />
    </div>
  );
};
