import { useEffect, useState, type ChangeEvent } from "react";
import axios from "axios";
import { PageWrapper, Text, Card, ContainerFacts, ErrorText } from "./styles";
import Input from "components/Input/Input";
export default function Lesson_10() {
  const [search, setSearch] = useState<string>("");
  const [catData, setCatData] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  const CAT_URL = "https://catfact.ninja/fact";

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const getCatFact = async () => {
    try {
      setCatData(undefined);
      setError(undefined);
      const response = await axios.get(CAT_URL);
      setCatData(response.data.fact);
    } catch (error: any) {
      console.log(error.message);
      setError(error.massege);
    }
  };

  useEffect(() => {
    console.log("зарождение");

    getCatFact();
  }, []);

  useEffect(() => {
    if (!!search) {
      console.log("обнова");
      getCatFact();
    }
  }, [search]);
useEffect(()=>{
    return()=>{
        console.log('Смерть');
    };
},[]);
  return (
    <PageWrapper>
      <Card>
        <ContainerFacts>
          <Input
            id="search-input"
            name="search"
            placeholder="Enter something and get cat fact"
            label="Get new cat fact"
            value={search}
            onChange={onSearchChange}
          />
          {!!catData && <Text>{catData}</Text>}
          {!!error && <ErrorText>{error}</ErrorText>}
        </ContainerFacts>
      </Card>
    </PageWrapper>
  );
}
