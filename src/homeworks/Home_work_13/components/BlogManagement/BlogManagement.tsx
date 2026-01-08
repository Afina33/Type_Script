import Card from "../Card/Card";
import {
  BlogManagementWrapper,
  ButtonControl,
  ManagementTextArea,
} from "./styles";
import { useState, createContext, type ChangeEvent } from "react"; // шаг 1
import Button from "components/Button/Button";
import type { MassageData, MassageDataContext } from "./types";

export const BlogManagementContext = createContext<MassageDataContext>({
  massageData: undefined,
  setMassageData: () => {},
});

export default function BlogManagement() {
  const [userText, setUserText] = useState<string>("");
  const [massageData, setMassageData] = useState<undefined | MassageData>(
    undefined
  );

  const getMassage = () => {
    setMassageData({ massageText: userText });
    setUserText("");
  };

  const onMassangeChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setUserText(event.target.value);
  };

  return (
    <BlogManagementContext.Provider
      value={{
        massageData: massageData,
        setMassageData: setMassageData,
      }}
    >
      <BlogManagementWrapper>
        <ManagementTextArea value={userText} onChange={onMassangeChange} />
        <ButtonControl>
          <Button onClick={getMassage} name="Запостить" />
        </ButtonControl>
        {massageData && <Card/>}
      </BlogManagementWrapper>
    </BlogManagementContext.Provider>
  );
}
