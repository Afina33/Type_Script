import styled from "@emotion/styled";
import type { InputProps } from "./types";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const InputLabel = styled.label`
  font-size: 16px;
  color: hsl(0, 0%, 44%);
  
`;
export const InputComponent = styled.input<InputProps>`
  width: 100%;
  height: 50px;
  border: 1px solid ${({error})=>(error? '#ef1616ff' : '#3f3f3f')};
  background-color: ${({disabled}) => disabled? "#0b0b0b4f" : "#ffffffff"};
  border-radius: 4px;
  padding: 12px;
  outline: none;
  ::placeholder {
    color: #6f6f6f;
    font-size: 16px;
  }
`;
