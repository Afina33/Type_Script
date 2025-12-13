import Input from "components/Input/Input";
import {
  AddFormContainer,
  ContainerWrraper,
  ListContainer,
  ListLi,
  ListUl,
  NameList,
} from "./styles";
import { useState, type ChangeEvent } from "react";
import Button from "components/Button/Button";
import { v4 } from "uuid";

export default function Homework_09() {
  const [text, setText] = useState<string>("");
  const [outputText, setOutputText] = useState<string[]>([]);

  function onChangeText(event: ChangeEvent<HTMLInputElement>): void {
    setText(event.target.value);
  }

  
  const OutputText = () => {
    setOutputText([...outputText, text]);
    setText("");
  };

  const textList = () => {
    return outputText.map((text: string) => <ListLi key={v4()}>{text}</ListLi>);
  };

  const add = (event: any) => {
    event.preventDefault();
    console.log(text);
  };

  return (
    <ContainerWrraper>
      <AddFormContainer onSubmit={add}>
        <Input
          id="text-id"
          name="text"
          placeholder="Введите заметку"
          label="Заметки:"
          onChange={onChangeText}
          value={text}
        />
        <Button name="Add" type="submit" onClick={OutputText} />
      </AddFormContainer>
      <NameList>Ваши заметки:</NameList>
      <ListContainer>
       <ListUl>{textList()}</ListUl> 
       </ListContainer>
    </ContainerWrraper>
  );
}
