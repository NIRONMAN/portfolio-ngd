"use client"
import About from '@/components/About'
import Card3D from '@/components/Card3D'
import ContactMe from '@/components/ContactMe'
import Contact from '@/components/ContactMe'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import SkillsComponent from '@/components/Skills'

import React from 'react'
function page() {
  return (
    <div 
    className=' dark:bg-slate-950 bg-white'>

      <Header></Header>
      <About></About>
      <Projects></Projects>
      <SkillsComponent></SkillsComponent>
<ContactMe></ContactMe>      
    </div>
  )
}

export default page   