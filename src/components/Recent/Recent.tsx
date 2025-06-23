import { Button } from '@/components/Button/Button';
import './Recent.scss';

export const Recent = () => {
  return (
    <div className="recent">
      <b>Recent</b>
      <ul>
        <li><Button action={() => console.log("questions")}>Question interessant 1</Button></li>
        <li><Button action={() => console.log("questions")}>Question interessant 2</Button></li>
        <li><Button action={() => console.log("questions")}>Question autre 1Question autre 1Question autre 1Question autre 1</Button></li>
        <li><Button action={() => console.log("questions")}>Question autre 2</Button></li>
        <li><Button action={() => console.log("questions")}>Question tout 1</Button></li>
        <li><Button action={() => console.log("questions")}>Question tout 2</Button></li>
      </ul>
    </div>
  );
};
