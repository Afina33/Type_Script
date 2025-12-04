import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const Paragraph = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: red;
  :hover{
  color: rgba(141, 0, 0, 1);
  }
`;
export const ButtonControl = styled.div`
  
  width: 300px;
`;