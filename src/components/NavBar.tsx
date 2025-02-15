import { Menu, SidebarClose, SidebarCloseIcon } from 'lucide-react'
import React, { useState } from 'react'



export default function NavBar() {
    
    const [sidebarVisible, setSidebarVisible] = useState(false)
    const sidebar = () => {
        setSidebarVisible(true)
    }
    return (
        <>
        <div className=' hidden md:flex  bg-black  justify-center '>
            <div className='flex fixed z-20 bg-gradient-to-b bg-slate-900  justify-evenly space-x-4 p-2 rounded-b-md min-w-[700px] shadow-cyan-400 shadow-md'>
                <a href='#home' className='text-xl text-white hover:bg-blue-400 rounded p-2  hover:scale-105'>Home</a>
                <a href='#about' className='text-xl text-white hover:bg-blue-400 rounded p-2  hover:scale-105'>About</a>
                <a href='#experience'className='text-xl text-white hover:bg-blue-400 rounded p-2 hover:scale-105'>Experience</a>
                <a href='#skills' className='text-xl text-white hover:bg-blue-400 rounded p-2  hover:scale-105'>Skills</a>
                <a href='#projects' className='text-xl text-white hover:bg-blue-400 rounded p-2  hover:scale-105'>Project</a>
                <a href='#contact' className='text-xl text-white hover:bg-blue-400 rounded p-2  hover:scale-105'>Contact</a>
            </div>
        </div>
        <div className='md:hidden min-w-full bg-white border-4 p-6 fixed z-50 '>
            <Menu onClick={sidebar} className={`${sidebarVisible?'left-4 absolute':'left-0 relative'}`}/>
        {sidebarVisible && <div className=' delay-75 ease-in-out  min-h-screen w-[60%] absolute bg-white left-0 z-50'>
            <SidebarClose className='left-2 float-right mr-2' onClick={()=>setSidebarVisible(false)}/>
                <div className='flex flex-col justify-center space-y-4 p-4'>
            <a href='#home' onClick={()=>setSidebarVisible(false)} className='text-xl text-black hover:bg-blue-400 rounded p-2  hover:scale-105'>Home</a>
            <a href='#about' onClick={()=>setSidebarVisible(false)} className='text-xl text-black hover:bg-blue-400 rounded p-2  hover:scale-105'>About</a>
            <a href='#experience' onClick={()=>setSidebarVisible(false)} className='text-xl text-black hover:bg-blue-400 rounded p-2 hover:scale-105'>Experience</a>
            <a href='#skills' onClick={()=>setSidebarVisible(false)} className='text-xl text-black hover:bg-blue-400 rounded p-2  hover:scale-105'>Skills</a>
            <a href='#projects' onClick={()=>setSidebarVisible(false)} className='text-xl text-black hover:bg-blue-400 rounded p-2  hover:scale-105'>Project</a>
            </div>
            </div>}
        </div>
        </>
    )
}
