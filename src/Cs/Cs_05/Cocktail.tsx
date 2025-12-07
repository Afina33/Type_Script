import { useState, type JSX } from "react";



export default function Cocktail():JSX.Element {
    const[ name , setName] = useState<string>("");
    const[imge, setImage ] = useState<string>("");

    async function loadCocktail():Promise<void>{
        const res = await fetch ('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const obj = await res.json();
        const { drinks } = obj;
        const{ strDrink, strDrinkThumb } = drinks[0];
        setName(strDrink);
        setImage(strDrinkThumb);
    } 
    // useEffect(()=>{

    // })
    
    


    return(
        <div>
            <h1>Cocktail: {name}</h1>
            <img src={imge} alt="foto" />
            <button type="button" onClick={()=>loadCocktail()}>Next</button>
        </div>
    );
}