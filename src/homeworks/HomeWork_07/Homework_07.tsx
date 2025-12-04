import Feedback from "components/Feedback/Feedback";
import { useState } from "react";
import "./styles.css";



export default function Homework_07() {
    const [like, setLike] = useState<number>(0); // Если мы ничего не передаем в качестве аргумента функции useState(), то 1 элемент массива, который эта функция возвращает === undefined
      const [dislike, setDislike] = useState<number>(0);
    
      const onLike = (): void => {
        setLike((prevValue: number): number => {return prevValue + 1});};
    
      const onDislike = (): void => {
        setDislike((prevValue: number):number => prevValue + 1);};
    
      const resetResults = (): void => {
        setLike(0);
        setDislike(0);
      };
    
    return(
        <div  
        // style={{backgroundColor: "red"}}
        className="divWrraper">
            <Feedback 
                like={like}
                dislike={dislike}
                onLike={onLike}
                onDislike={onDislike}
                resetResults={resetResults}
                
            />
        </div>
    );
};