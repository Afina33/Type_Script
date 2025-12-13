import './style';
import { useEffect, useState, type JSX } from 'react';
import { WrapperDiv } from './style';
import Button from 'components/Button/Button';

export default function Playgraund():JSX.Element {
const [numberOfDogs, setNumberOfDogs] = useState<number>(0);
const [numberOfBirds, setNumberOfBirds] = useState<number>(10);

function handleAddDogs(): void {
    return setNumberOfDogs(numberOfDogs + 1)    
};

function handelAddBirds():void{
    setNumberOfBirds(numberOfBirds - 1)
};
// Component lifcycle - жизненный цикл компонента
  // Этапы жизненого цикла:
  // Mount - первая отрисовка компонента на странице
  // Update - изменение
  // Unmount - когда перестает отрисовываться

// useEffect
  // позволяет вызвать функцию
  // на каком-нибудь из этапов жизни компонента
  // - принимает колбек функцию и второй опиональный параметр -
  // массив зависимостей

    // Пример 1 - пустой массив зависимостей
useEffect(()=>{
console.log('UseEffect 1 - толко при первой отрисовки  === Mount');  
},[]);

// Пример 2 - без массива (вообще)
useEffect(()=>{
    console.log('UseEffect 2 - при изменниях ');
    
},);
// Пример 3 - с указанием зависимостей
useEffect(()=>{
    console.log('UseEffect 3 - при изменении переменной конкретного компонента');
    }, [numberOfDogs]);


    return(
        <WrapperDiv>
            <h1>Playgraund</h1>
            <p>Numer of dogs: {numberOfDogs}</p>
            <p>Numer of birds: {numberOfBirds}</p>
            <Button  onClick={handleAddDogs} name='Dogs'/>
            <Button  onClick={handelAddBirds} name='Birds'/>
        </WrapperDiv>
    );
}