import React, { FC } from "react";
import { Buttonfx } from "./styles";

interface Props {
  title: string;
  style?: React.CSSProperties;
  position?:string | undefined;
}

const Button: FC<Props> = ({ title, style }) => {
  return (
    <div>
      <Buttonfx style={style}>{title}</Buttonfx>
    </div>
  );
};

export default Button;
