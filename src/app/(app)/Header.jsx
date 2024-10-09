"use client"
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from 'payload.config'
import Image from 'next/image'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const Header = () => {
  useEffect(() =>{

    const loadData=async()=>{
  
      const payload = await getPayloadHMR({
        config,
      })
      const data = await payload.findGlobal({
        slug: 'site-setting',
      })
      const categories = await payload.find({
        collection: 'menus',
      })
    }

    loadData()
  }
  )
  console.log(categories)
  const [menuIndex, setMenuIndex] = useState(0);
  return (
    <div className=" py-2 bg-[#343434] w-full">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="relative h-16 w-16">
            <Image src={data?.logo?.url} fill alt=""></Image>
          </div>
          {data?.showTitle && (
            <h1 className="text-4xl mt-4 bg-gradient-to-r from-green-300 bg-emerald-500 bg-clip-text text-transparent font-bold">
              {data?.websiteTitle}
            </h1>
          )}
        </div>
        <ul className="flex  gap-10 text-white text-base text-center ">
          {categories?.docs?.map((category, i) => {
            return (
              <div className="relative" key={category?.id}>
                {/* onMouseOver={()=>setMenuIndex(i+1)}  */}
                <li className="dropdown dropdown-hover  text-white">
                <Link className='hover:bg-gradient-to-r py-5 px-2 transition-colors duration-300 ease-in-out hover:from-green-300 hover:bg-emerald-500 bg-clip-text hover:text-transparent uppercase' tabIndex={i} href={category?.url ? category.url : '#'}>
                    {category?.name.split(' ')[0]}
                  </Link>
                  {
                    category?.submenu?
                  <ul tabIndex={i}
                  className={`dropdown-content overflow-hidden  transition-all ease-in-out duration-500  absolute bg-gradient-to-r left-1/2 -translate-x-1/2 min-w-40 hover:text-white from-green-300 bg-emerald-500 rounded top-10 z-10 text-base capitalize `}
                >
                  {category?.submenu?.map((menu) => (
                    <li className="px-5 py-2" key={menu?.id}>
                      {menu?.name}
                    </li>
                  ))}
                </ul>
                :""
                  }
               
             
                </li>

              
                
              </div>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Header
