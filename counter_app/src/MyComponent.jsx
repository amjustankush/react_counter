import React, {useState} from 'react';

function MyComponent(){

        const [name, setName] = useState('guest');
        const [age, setAge] = useState(0);
        const [isEmployed, setIsEmployed] = useState(false);

        const updateName = () =>{
            setName('ankush');
        }
        const incrementAge = ()=>{
            setAge(age + 1);
        }
        const reduceAge = ()=>{
            setAge(age-1);
        }
        const reset = ()=>{
            setAge(0);
        }
        const toggle = ()=>{
            setIsEmployed(!isEmployed);
        }

        return(
            <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>set name</button>

                <p>age: {age}</p>
                <button onClick={incrementAge}>increase age</button>
                <button onClick={reduceAge}>reduce age</button>
                <button onClick={reset}>reset age</button>

                <p>Employed: {isEmployed ? `yes`:`no`}</p>
                <button onClick={toggle}>Yes/no</button>
                
            </div>
        );
}
export default MyComponent

