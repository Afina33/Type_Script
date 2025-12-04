import { ButtonStyle } from "./styles";
import {type ButtonProps } from "./types";

function Button({ name = "Send", type = "button", onClick, isRed = false, isDisabled = false}:ButtonProps) {

  return (
    <ButtonStyle $isDisabled={isDisabled} $isRed={isRed} type={type} onClick={onClick}>
      {name}
    </ButtonStyle>
  );
}

export default Button;
