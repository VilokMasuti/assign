import { GithubIcon, Linkedin, MessageCircle, WheatOffIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className=' flex items-center justify-center mt-[150px]'>

    

      <div className=' flex mt-24 gap-10'>
     
            <Link href=" https://www.linkedin.com/in/vilok-masuti-99aab8252/">
            <Linkedin width={100} height={100}/>
            </Link>
            <Link href="https://github.com/VilokMasuti ">
            <GithubIcon width={100} height={100}/>
            </Link>
            <Link href="https://wa.me/9731594346 ">
    <MessageCircle width={100} height={100}/>
            </Link>


      </div>
    </div>
  )
}

export default page