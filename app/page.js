"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()
  const [text, setText] = useState("")

  const createTree=() => {
    router.push(`/generate?handle=${text}`)
  }
  
 
  return (
    <main>
      <section className="bg-[#254f1a] min-h-[115vh] flex max-xl:flex-col-reverse max-xl:justify-center">
        <div className="flex justify-center flex-col ml-[5vw] gap-3 max-xl:mr-[5vw] max-xl:px-4 max-xl:h-[500px] max-lg:h-[600px]">
          <p className="text-yellow-300 font-bold text-7xl max-xl:text-center max-sm:text-4xl">Everything you</p>
          <p className="text-yellow-300 font-bold text-7xl max-xl:text-center max-sm:text-4xl">are. In one,</p>
          <p className="text-yellow-300 font-bold text-7xl max-xl:text-center max-sm:text-4xl">simple link in bio.</p>
          <p className="text-yellow-300 text-xl my-4 max-xl:text-center max-sm:text-xl">Join 70M+ people using Linktree for their link in bio. 
            One link to help you share everything you create, curate and sell from your Instagram, TikTok, 
            Twitter, YouTube and other social media profiles.</p>
            <div className="input flex gap-4 max-xl:justify-center max-sm:flex-col max-sm:items-center">
              <input value={text} onChange={(e)=>setText(e.target.value)} type="text" className="bg-white px-2 py-2 focus:outline-green-800 rounded-md w-[350px] max-sm:w-[200px]" placeholder="Enter your Handle (min 3 characters)">  
              </input>
              <button disabled={text.length <= 2} onClick={()=>createTree()} className="disabled:bg-slate-400 disabled:cursor-auto cursor-pointer bg-pink-300 rounded-full px-6 py-4 font-semibold max-sm:w-[200px]">View Your Linktree (demo)</button>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center mr-[5vw] max-xl:ml-[5vw]">
          <img id="pic1" src="./home.png" alt="homeimg" />
        </div>
      </section>
      <section className="bg-pink-200 min-h-[110vh] flex max-xl:flex-col max-xl:justify-center">
        <div className="flex flex-col items-center justify-center ml-[5vw] max-xl:ml-[5vw]">
          <img src="./home2.png" alt="homeimg" srcSet="" />
        </div>
        <div className="flex justify-center flex-col px-7 ml-[5vw] gap-3 max-xl:mr-[5vw] max-xl:px-4 max-xl:h-[500px] max-lg:h-[600px]">
          <p className="text-[#502274] font-bold text-6xl max-xl:text-center max-sm:text-3xl">Create and customize</p>
          <p className="text-[#502274] font-bold text-6xl max-xl:text-center max-sm:text-3xl">your Linktree in</p>
          <p className="text-[#502274] font-bold text-6xl max-xl:text-center max-sm:text-3xl">minutes</p>
          <p className="text-[#502274] text-xl my-4 max-xl:text-center max-sm:text-sm">Connect your Youtube, Instagram, X (Twitter), website, store, videos, music, podcast, events and more. It all comes together in a link in bio landing page designed to convert.</p>
            <div className="input flex gap-4 max-xl:justify-center">
              {/* <input value={text} onChange={(e)=>setText(e.target.value)} type="text" className="bg-white px-2 py-2 focus:outline-green-800 rounded-md w-[20vw]" placeholder="Enter your Handle">  
              </input> */}
              <button onClick={()=>createTree()} className="bg-[#502274] text-white cursor-pointer rounded-full px-10 py-4 font-semibold">Get Started for Free</button>
            </div>
        </div>
        
      </section>
    </main>
  );
}
