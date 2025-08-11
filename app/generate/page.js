"use client"
import React from 'react'
import { useState, Suspense } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { useSearchParams } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";



const GenerateContent = () => {

  const router = useRouter()

  const searchParams = useSearchParams()
  // const [link, setlink] = useState("")
  const [handle, sethandle] = useState(searchParams.get('handle'))
  const [links, setLinks] = useState([{ link: "", linktext: "" }])
  // const [linktext, setlinktext] = useState("")
  const [pic, setpic] = useState("")
  const [desc, setdesc] = useState("")
  const [bitTreepage, setbitTreepage] = useState(false)

  const handleChange = (index, link, linktext) => {
    setLinks((initialLinks) => {
      return initialLinks.map((item, i) => {
        if (i == index) {
          return { link, linktext }

        }
        else {
          return item
        }
      })
    })
  }

  const addLink = () => {
    setLinks(links.concat([{ link: "", linktext: "" }]))
  }


  // const gotoBitTree=(handle)=>{
  //   router.push(`/${handle}`)
  // }



  const submitLinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "links": links,
      // "linktext": text,
      "handle": handle,
      "pic": pic,
      "desc": desc
    });



    console.log(raw)


    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const r = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/add`, requestOptions);
    const result = await r.json()
    if (result.success) {
      // const currhandle=handle
      toast.success(result.message)
       setbitTreepage(true)
      //  gotoBitTree(handle)

      setLinks([{link: "", linktext: ""} ])
      setpic("")
      setdesc("")
      // sethandle("")
      



      


    }
    else {
      toast.error(result.message)
      setbitTreepage(false)
    }

    // setlink("")
    // setlinktext("")

    // .then((response) => response.text())
    // .then((result) => console.log(result))
    // .catch((error) => console.error(error));
  }


  return (
    <div className='bg-[#E9C0E9] min-h-[120vh] grid grid-cols-2 max-xl:flex max-xl:flex-col-reverse max-xl:items-center'>


      <div className="col1 flex flex-col items-center justify-center text-gray-900">

        <div className='flex flex-col gap-5 my-8 '>
          {/* <h1 className='font-bold text-4xl'>Create your Bittree</h1> */}
          <div className="item max-sm:px-[40px]">
            <h2 className='font-semibold text-2xl'>Step 1: Claim your Handle</h2>
            <div className="mx-4">
              <input value={handle || ""} onChange={e => { sethandle(e.target.value) }} type="text" className='bg-white px-4 py-2 my-2 focus:outline-pink-500 rounded-full' placeholder='Choose a Handle' />
            </div>
          </div>

          <div className="item max-sm:px-[40px]">
            <h2 className='font-semibold text-2xl'>Step 2: Add Your Links</h2>
            {links && links.map((item, index) => {
              return <div key={index} className="mx-4">
                <input value={item.linktext || ""} onChange={e => { handleChange(index, item.link, e.target.value) }} type="text" className='bg-white px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full' placeholder='Enter link text' />
                <input value={item.link || ""} onChange={e => { handleChange(index, e.target.value, item.linktext) }} type="text" className='bg-white px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full' placeholder='Enter link' />

              </div>
            })}
            <button onClick={() => addLink()} className=' cursor-pointer rounded-3xl p-5 py-2 mx-2 bg-slate-900 text-white font-bold'>+ Add Link</button>
          </div>


          <div className="item max-sm:px-[40px]">
            <h2 className='font-semibold text-2xl'>Step 3: Add a Profile Picture and Finalize</h2>
            <div className='mx-4 flex flex-col'>
              <input value={pic || ""} onChange={e => { setpic(e.target.value) }} type="text" className='bg-white px-4 py-2 my-2 focus:outline-pink-500 rounded-full' placeholder='Add Link to your Picture' />
              <input value={desc || ""} onChange={e => { setdesc(e.target.value) }} className='bg-white px-4 py-2  my-2 focus:outline-pink-500 rounded-full' type="text" placeholder='Enter description' />
              <div className="flex">
                <button disabled={pic == "" || handle == "" || links[0].linktext == ""} onClick={() => { submitLinks() }} className='disabled:bg-slate-500 disabled:cursor-auto cursor-pointer rounded-3xl p-5 py-2 mx-2 w-fit my-5 bg-slate-900 text-white font-bold'>Create Your BitTree</button>
                <button hidden={bitTreepage ==false} onClick={() => router.push(`/${handle}`)} className='disabled:bg-slate-500 cursor-pointer rounded-3xl p-5 py-2 mx-2 w-fit my-5 bg-slate-900 text-white font-bold'>Here&lsquo;s Your BitTree</button>
              </div>

            </div>
          </div>

        </div>
      </div>
      <div className="col2 w-full h-screen bg-[#E9C0E9] max-xl:flex max-xl:justify-center">
        <img className='h-full object-contain' src="./generate.png" alt="GenerateKaro" />
        <ToastContainer />
      </div>
    </div>
  )
}

export default function Generate() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GenerateContent />
    </Suspense>
  );
}
