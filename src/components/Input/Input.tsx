
import { InputComponent, InputLabel, InputWrapper } from "./styles";
import {type InputProps } from "./types";

function Input({ id, name, type, placeholder, label, disabled = false, error}: InputProps) {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>
        {label}
      </InputLabel>
      <InputComponent
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        error={error}/>
    </InputWrapper>
  );
}

export default Input;
