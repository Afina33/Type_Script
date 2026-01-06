import styled from "@emotion/styled";

export const ClientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Title = styled.h2`
  font-size: 30px;
  color: #12299bff;
`;

export const ClientsLink = styled.nav`
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  :hover {
    color: #736dddff;
  }
`;

export const ButtonControl = styled.div`
  width: 300px;
`;

export const WrapperFirma = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
  margin: 50px;
  flex: 1;
`;
