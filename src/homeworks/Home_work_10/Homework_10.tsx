import { useEffect, useState } from "react";
import { DivButton, OutputDiv, WrapperDiv } from "./styles";
import axios from "axios";
import Button from "components/Button/Button";


export default function Homework_10() {
    const [state, getState] = useState<string>('');
    const [error, setError] = useState<string | undefined>(undefined);
    const getApi = 'https://official-joke-api.appspot.com/random_joke'

    const getJoke = async () => {
        try{
            setError(undefined);
            const response = await axios.get(getApi);
            getState(response.data.setup);
        }catch(error: any){
            console.log("Some Network Error");
            setError(error.masage);
        }
    }


    useEffect(()=>{
        getJoke();
    }, []);

    return(
        <WrapperDiv>
            <OutputDiv>{state}</OutputDiv>
                <DivButton>
                    <Button name="get" onClick={getJoke}/>
                </DivButton>
        </WrapperDiv>
    )
}