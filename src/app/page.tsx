"use client"


import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Skills from '@/components/Skills'
import NavBar from '@/components/NavBar'

export default function Home() {
  // useEffect(() => {
  //   const observerCallback: IntersectionObserverCallback = (entries) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add('active')
  //       }
  //     })
  //   }

  //   const observerOptions: IntersectionObserverInit = {
  //     threshold: 0.1
  //   }

  //   const observer = new IntersectionObserver(observerCallback, observerOptions)
  //   const elements = document.querySelectorAll('.reveal')
  //   elements.forEach(el => observer.observe(el))
  //   return () => observer.disconnect()
  // }, [])
  
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

