
export default function Task_01() {
interface Phone{
    model: string;
    price: number;
    isNew: boolean;
}

const phones: Phone[] = [
  { model: "iPhone 14", price: 1200, isNew: true },
  { model: "Samsung S22", price: 1000, isNew: false },
  { model: "Google Pixel 7", price: 900, isNew: true },
  { model: "OnePlus 10", price: 850, isNew: false },
];


    return(
        <div>
            {phones.map((phone, index)=>(
                <div key={index}>
                    <h2>{phone.model}</h2>
                    <p>Стоимоть: ${phone.price}</p>
                    <p>Состояние: {phone.isNew ? "Новый":"Б/у"}</p>
                </div>
            ))}
        </div>
    );
}