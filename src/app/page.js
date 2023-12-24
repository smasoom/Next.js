'use client' 
import Link from 'next/link';
// file k top pe hoga 
// jaise alert h wo client side rendering h isiliye to execute that we use useclient
import styles from './page.module.css'
import { useState } from 'react';
import {useRouter} from 'next/navigation'


export default function Home() {
const router=useRouter();
 const [name, setName] = useState("masoom");

const Apple=()=>
{
  setName("aditya")
}


 function Component2() {
  return (
    <div>
      <h1>mai  componet k andr hi call kiya h</h1>
    </div>
  )
}



  return (
    <main >
      {/* <Masoom name="Masoom" branch="civil" course="btech"/>
      <Masoom name="aditya" branch="cse" course="btech"/>
      <Masoom name="saurav" branch="mech" course="btech"/>
      <Masoom name="ketaki" branch="hu" course="btech"/> */}
      
 <Link href="/login">GO TO LOGIN PAGE</Link>
     <h1>HOMEPAGE {name}</h1>
     <Link href="/about">GO to about page</Link>
  <button onClick={Apple}>click</button>
<button onClick={()=>
{
  router.push("/login")
}}>login page click to go</button>
  {Component2()}
    </main>
  )
}

// const Masoom=(props)=>
// {  return(
//   <main>
//      <h1>mai {props.name} hu {props.course} -{props.branch}</h1>
//      <div className="container">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sed minima eveniet illo! Soluta maiores, debitis suscipit inventore assumenda ipsam necessitatibus aspernatur totam! Mollitia possimus modi facilis fugiat rem eos consectetur ad, sed quaerat blanditiis, ab perspiciatis aperiam fugit magnam porro ea provident odio amet sint, consequuntur voluptates? Voluptatum, necessitatibus?</div>
//   </main>
 
// )
// }