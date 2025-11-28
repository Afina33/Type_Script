import "./styles.css";

function Lesson_06() {
    let userFullName: string ='John Johnson';
    let hello: string = `Hello ${userFullName}`;
    console.log(hello);
    
    let name = 'Tom';

    let result: number = 100;

    console.log(result);
    
    let isAdmin: boolean = false;
    
    let animal: string[] = ['Tiger', 'Lion', 'Dog',];
    let numbers: number[] = [1, 2, 4, 6, 3, 6,];
    
    let userArray:[string, string, string, number] = ['name','Bob','age', 10,];
    console.log(userArray);

    // const sayHi = (personalName:string): void=>{
    //     console.log(`Hello ${personalName}`);
    // };

    const sayHi:(personalName: string)=>void = (personalName)=>{
        console.log(`Hello ${personalName}`);
    };

    let add = (a:number, b: number,):number=>{
        return a + b;
    };
    console.log(add(1, 2));

    let anyVariable: any = 'hello'; // принимает любой тип

    let count: null = null;
    let year: undefined = undefined;

    let userAge: undefined | number = undefined;
    userAge = 18;

    interface User{
        firstName: string;
        age: number;
    }

    const userData: User ={
        firstName: 'Semen',
        lastName: 'Syniuk',
        age: 28,
    };

    interface Admin extends User {
        isAdmin: boolean;
    }; 

    const adminData: Admin = {
        isAdmin: true,
        firstName: 'Bob',
        lastName: 'Smit',
        age: 24,
    }

    interface User{
        lastName: string;
    }
     type Animal = {
        name: string;
     };

     const animalData: Animal ={
        name: 'Lion',
     }

     

    return <div className="lesson_06">
        <h1>lesson 06 </h1>
    </div>
}
export default Lesson_06;