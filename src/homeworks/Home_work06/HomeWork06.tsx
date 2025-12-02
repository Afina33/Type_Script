import { v4 } from "uuid";
import "./styles.css";


export default function HomeWork06() {
  interface Car {
  brand: string;
  price: number;
  isDiesel: boolean;
}

  const cars: Car[] = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
    { brand: "Audi", price: 50000, isDiesel: true },
  ];

  return (
    <div className="conteiner">
      {cars.map((car: Car ) => (
        <div  key={ v4()} className="car">
          <h2>{car.brand}</h2>
          <p><strong>Price:</strong> ${car.price}</p>
          <p><strong>Fuel type:</strong> {car.isDiesel ? "Дизель" : "Бензин"}</p>
        </div>
      ))}
    </div>
  );
}
