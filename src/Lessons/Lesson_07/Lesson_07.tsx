import "./styles.css";
import Button from "components/Button/Button";
import Input from "components/Input/Input";
import Counter from "components/Counter/Counter";
import { WEATHER_CODES } from "./types";
import { useState } from "react";
// !! Есть 2 основных способа вызова перерендера(обновления) компонента:
// 1 - изменения state(посредством вызова функции setState())
// 2 - изменение props
function Lesson_07() {
  // 12. enum
  // Создайте функцию, которая бы принимала следующие параметры:
  //   код погоды и функция decode, которая дает расшифровку погоды по коду.
  //   Функция должна возвращать строку, описывающую погоду. Таблица соответствия
  //   код-описание: SQ – шквал PO – пыльный вихрь FC - торнадо BR – дымка
  //   (видимость от 1 до 9 км) HZ – мгла (видимость менее 10 км) FU – дым
  //   (видимость менее 10 км) DS - пыльная буря (видимость менее 10 км) SS -
  //   песчаная буря (видимость менее 10 км) Подсказка: удобно использовать в
  //   одном из методов switch-case:
  const decode = (weatherCode: string): string => {
    
    switch (weatherCode) {
      case WEATHER_CODES.SQ: {
        return "шквал";
      }
      case WEATHER_CODES.PO: {
        return "пыльный вихрь";
      }
      case WEATHER_CODES.FC: {
        return "торнадо";
      }
      case WEATHER_CODES.BR: {
        return "дымка (видимость от 1 до 9 км)";
      }
      case WEATHER_CODES.HZ: {
        return "мгла (видимость менее 10 км)";
      }
      case WEATHER_CODES.FU: {
        return "дым (видимость менее 10 км)";
      }
      case WEATHER_CODES.DS: {
        return "пыльная буря (видимость менее 10 км)";
      }
      case WEATHER_CODES.SS: {
        return "песчаная буря (видимость менее 10 км) ";
      }
      default:
        return "This code doesnt exist";
    }
  };
  const weather = decode(WEATHER_CODES.DS);
  console.log(weather);
  // Джинерик
  type ArrrayGenerator <Type> = Type[];
// До использования Generic
  // const sringsArray: string[] = ["a", "b", "c"];
  // const numbersArray: number[] = [1, 2, 3, 4, 5];
  // const booleanArray: boolean[] = [true, false, true];
  // После использования Generic
  const strringArray: ArrrayGenerator<string> = ['a', 'b', 'c'];
  const numbersArray:ArrrayGenerator<number> =[1,2,3,4,5];
  const booleanArray:ArrrayGenerator<boolean> = [true, false, true];


  const item1 = {
    type: 'tv',
    value: 1234565,
  };
  const item2 = {
    tupe: 'Pc',
    valur: 12345642,
  }
  const sendRequest = () => {
    // fetch("/url", {
    //   method: "POST",
    //   body: `${count}`,
    // });
    console.log("Отправка даных на сервер", count);
    
  };

    const [count, setCount] = useState<number>(0);
  
    const onPlus = () => {
      setCount((prevValue: number) => {
        return prevValue + 1;
      });
    };
  
    const onMinus = () => {
      setCount((prevValue: number) => {
        return prevValue - 1;
      });
    };

  return <div className="lesson_07_page_wrapper">
    <Button name="Send request" onClick={sendRequest}/>
    <Input label="Userr Name" name="userName"  />
    <Counter count={count} onMinus={onMinus} onPlus={onPlus}/>
    
  </div>;
}
export default Lesson_07;