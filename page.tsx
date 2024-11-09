
import React from 'react'
import Navbar from "./components/Navbar"
import Link from "next/link"
import Image from "next/image"
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiHome7Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { MdContactPage } from "react-icons/md";
import { SiPrivateinternetaccess } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { IoLogoHtml5 } from "react-icons/io5";

function Page() {
  return (
    <div>
     <div className=' container w-full ml-0 flex bg-sky-400 h-14  items-center'>
            <div className='container flex  text-xl  justify-beween'>
        <h1 className='flex ml-2 text-2xl items-center '>NavBar</h1>
        <ul className='flex px-96 gap-4 text-2xl '>
        <Link href="" >Home</Link>
        <Link href="">About</Link>
        <Link href="">Contact</Link>
        
        
        </ul>
        </div>

        <div className="container flex ml-3 mt-4 md:mt-0 pt-4 gap-4  ">
        <button className="inline-ntem-centflex ier rounded-lg bg-red-400 text-black border-0 py-1 px-3 focus:outline-none hover:bg-orange-600 text-base" >Login</button>
        <button className="inline-ntem-centflex ier rounded-lg bg-red-400 text-black border-0 py-1 px-3 space-x-1 focus:outline-none hover:bg-orange-600 text-base" >Signup</button>
        </div>
        </div>
<div className=" container flex pt-20 gap-4 justify-between">
  <div className="border-1 w-72 h-72 pt-10 rounded-full  bg-sky-400 text-4xl text-blue-800 text-center font-medium ml-2">
Projects
<ul className="text-xl text-black">
  <Link href=""><li>To Do</li></Link>
  <Link href=""><li>Calculator</li></Link>
  <Link href=""><li>Counter</li></Link>
  <Link href=""><li>Card</li></Link>
  <Link href=""><li>Facebook Clone</li></Link>
</ul>

  </div>

<div className="ml-18">
  <h1 className="ml-32 text-3xl ">Feed Back</h1>
  <div className="pt-1 ml-12">

  <div className="flex flex-col bg-white p-8  mt-14 rounded-lg w-80 border ">
    <h1>Name</h1>
        <input className="px-4 h-12 my-2 border-2 border-black-100 rounded-lg" type="text" placeholder="Your Name"></input>
        <h1>Email</h1>
        <input className="px-4 h-12 my-2 border-2 border-black-100 rounded-lg" type="password" placeholder="Your Email"></input>
        
        <button className="btn bg-red-400  hover:bg-orange-600 text-black-400 my-2 py-3 rounded-lg font-bold text-xl">Contact</button>
</div>
</div>
</div>


  <p className="border-1 item-center w-60 h-60 pt-18 ">
    <Image  className="border-1 w-80 h-80 pt-1 rounded-full  bg-sky-400 text-4xl text-blue-800 mr-12 pr-1  pt-18 ml-12 transition-transform duration-300 ease-in-out transform  hover:scale-110" src={"/images/farhat.jpg"} alt="logo" width={400} height={400} ></Image>

  
</p>
</div>


  {/* icons*/}
<div className='container px-2 py-8 max-auto flex flex-wrap justify-center item-center space-x-6 text-2xl' >

<div className="flex flex-wrap item-center bg-white border-2 border-yelow-500 p-4 transition-transform duration-300 ease-in-out transfor hover:scale-110" >
<SiVisualstudiocode className="text-sky-500 text-6xl"/>
<span className="mta-2 text-lg text-black">visual Studio</span>
</div>
<div className="flex flex-wrap item-center bg-white border-2 border-yelow-500 p-4 transition-transform duration-300 ease-in-out transfor hover:scale-110" >
<SiPython className="text-sky-500 text-6xl"/>
<span className="mt-2 text-lg text-black">Python</span>
</div>
<div className="flex flex-wrap item-center bg-white border-2 border-yelow-500 p-4 transition-transform duration-300 ease-in-out transfor hover:scale-110" >
<IoLogoHtml5 className="text-sky-500 text-6xl"/>
<span className="mt-2 text-lg text-black">HTML</span>
</div>
<div className="flex flex-wrap item-center bg-white border-2 border-yelow-500 p-4 transition-transform duration-300 ease-in-out transfor hover:scale-110" >

<DiJavascript className="text-sky-500 text-6xl"/>
<span className="mt-2 text-lg text-black">JavaScript</span>
</div>
 
<h1 className="text-whie font-bold">Some Experties will  in Course <br/>
As done in Quarter II
</h1>

<br/>
<br/>
<br/>

<span>

</span>


<div className="pt-48">
<div className=" w-full h-1 bg-sky-400 border-1  ">
        <div className="grid grid-cols-3 bg-sky-400 gap-4 pt-2">
       
          <div className="px-32  text-black-950 text-2xl">
            <Link href="">
          < div className="flex flex-row">
          <MdContactPage />
            contact us
            </div>
            </Link>
            <Link href="">
            < div className="flex flex-row">
            <SiPrivateinternetaccess />
            private policy
          </div>
          </Link>
        </div>
        
          <div className="px-32  text-black-950 text-2xl">
            <Link href="">
          < div className="flex flex-row">
          <RiHome7Fill />
            Home
            </div>
            </Link>
            <Link href="">
            < div className="flex flex-row">
            <MdEmail />
            Email
          </div>
          </Link>
          </div>
        
     
          <  div className=" text-black-400 text-2xl">
          <Link href="">
          < div className="flex flex-row">
          
          <IoLogoFacebook />
           Facebook

          </div>
          </Link>
          <Link href="">
          <div className="flex flex-row">
          <FaTwitterSquare />
          Twitter
          </div>
          </Link>
          <Link href="">
          <div className="flex flex-row">
          <FaLinkedin />
          Linked In
          </div>
          </Link>
</div>
          </div>
      
      </div>
    </div>
</div>

  </div>
    
  )
}

export default Page