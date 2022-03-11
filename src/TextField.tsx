import React from 'react'
import {useState,useRef} from 'react'

interface Person{
    firstName: string
    lastName: string
  }
  

  interface Props{
    //standard variables
    text: string;
    //ok:boolean;
    //i: number;
    //function
    //fn: (bob:string)=> string;
    //object
    //obj:{
      //f1:string;
    //}
    //class types
    // handleChange: (event: React.ChangeEvent<HTMLInputElements>)=> void;
    person:Person;
  }

export const TextField:React.FC<Props>=()=>{
    //the <> can be used to determine the possible states in useState
    const [count,setcount] = useState<number>(5);
    const inputRef = useRef<HTMLInputElement>(null);
    setcount(0)
    return (
        <div>
            <input ref = {inputRef}/>
        </div>

)


  }