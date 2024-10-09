import { getPayloadHMR } from '@payloadcms/next/utilities'
import React from 'react'
import config from "payload.config"
import Image from 'next/image'
const Categories = async () => {
    const payload=await getPayloadHMR({
      config
    })
    const data=await payload.find({
      collection:"categories",
    })
    
  return (
    <div className='flex justify-center gap-4 mt-10'>
        {data.docs?.map((doc) => (
          <div className='bg-slate-200 w-fit p-8 rounded-lg' key={doc.id}>
            <div className='relative h-20 w-20 rounded-full mx-auto mb-4 bg-slate-200'>
              <Image fill src={doc?.image?.url} alt='' className='rounded-full'></Image>
            </div>
            <h1 className='text-lg font-semibold text-center'>{doc.name}</h1>
          </div>
        ))}
      
    </div>
  )
}

export default Categories
