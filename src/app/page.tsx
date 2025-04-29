"use client"  
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Skills from '@/components/Skills'
import NavBar from '@/components/NavBar'
import { useState } from 'react'
export default function Home() {
  
  return (
    <div >
      <NavBar  />
      <Hero />
      <About  />
      <Experience />
      <Projects />
      <Skills/>
      <Contact />
    </div>
  )
}


