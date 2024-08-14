import Link from 'next/link'
import React from 'react'

type Props = {}

function NavBar({}: Props) {
  return (
    <nav className=' flex flex-row p-3 text-white justify-around'>
        <h1 className=' font-semibold text-lg'><Link href={'/'}>Niranjan Dabhade</Link></h1>
        <ul className=' flex flex-row gap-8'>
            
            <li><Link href={"/projects"}>Projects</Link></li>
            <li><Link href={"/AboutMe"}>About Me</Link></li>
            <li><Link href={"/contact"}>Contact Me</Link></li>
            
        </ul>
    </nav> 
  )
}

export default NavBar