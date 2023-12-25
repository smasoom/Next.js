import Link from "next/link";
import './about.css'

export default function layout({children}) {
  return (
    <div >
        <ul className="nav" >
         
            <li><Link href="/about/aboutstudent">About student</Link></li>
            <li><Link href="/about/aboutcollege">About college</Link></li>
            <li><Link href="/about/aboutcollege">About college</Link></li>
            <li><Link href="/about/aboutcollege">About college</Link></li>
        </ul>
      {children}
    </div>
  )
}
