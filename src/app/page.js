import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Masoom name="Masoom" branch="civil" course="btech"/>
      <Masoom name="aditya" branch="cse" course="btech"/>
      <Masoom name="saurav" branch="mech" course="btech"/>
      <Masoom name="ketaki" branch="hu" course="btech"/> */}

      
     <h1>HOMEPAGE</h1>

    </main>
  )
}

const Masoom=(props)=>
{  return(
  <main>
     <h1>mai {props.name} hu {props.course} -{props.branch}</h1>
     <div className="container">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident sed minima eveniet illo! Soluta maiores, debitis suscipit inventore assumenda ipsam necessitatibus aspernatur totam! Mollitia possimus modi facilis fugiat rem eos consectetur ad, sed quaerat blanditiis, ab perspiciatis aperiam fugit magnam porro ea provident odio amet sint, consequuntur voluptates? Voluptatum, necessitatibus?</div>
  </main>
 
)
}