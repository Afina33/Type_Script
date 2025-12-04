import styled from "@emotion/styled";
interface ButtonComponentStyles {
  $isRed: boolean;
  $isDisabled: boolean;
}



export const ButtonStyle = styled.button<ButtonComponentStyles>`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  padding: 0;
  height: 70px;
  width: 100%;
   background-color: 
   ${({ $isDisabled}) =>
    $isDisabled ? "rgba(146, 143, 143, 1)" : " rgb(82, 82, 241)"};
   ${({ $isRed }) =>
    $isRed ? "rgba(232, 13, 13, 1)" : " rgb(82, 82, 241)"};
  color: white;
  font-size: 20px;
  font-weight: bold;
  cursor:
  ${(({$isDisabled})=>$isDisabled ? 'not-allowed' : 'pointer')};
  :hover{
    background-color:
    ${({  $isDisabled}) =>
       $isDisabled ? "rgba(97, 95, 95, 1))" : "rgb(104, 104, 233)"};
     ${({ $isRed }) =>
      $isRed ? "rgba(206, 9, 9, 1)" : "rgb(104, 104, 233)"};
  }
`;