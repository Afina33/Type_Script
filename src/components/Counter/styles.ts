import styled from "@emotion/styled";

export const CounterComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 400px;
  height: fit-content;
  border: 1px solid black;
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 10px;
`;

export const CounterButton = styled.button`
  width: 100px;
`;

export const CounterP = styled.p`
  font-size: 40px;
  font-weight: bold;
`;
