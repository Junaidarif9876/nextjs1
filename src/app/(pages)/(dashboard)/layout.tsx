"use client"

import { AppSidebar } from '@/components/core/sidebar'
import { auth , onAuthStateChanged } from '@/firebassconfig/firebase'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Layout = ({children}) => {
  const router = useRouter()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          router.push('/dashboard');
          // ...
        }
      });  
    }  

)
  return (
    <div>
      <div className='flex'>
      <div className="">
         <AppSidebar/>
         </div>
         <div className="">
         {children}
         </div>
      
    </div>
    </div>
  )
}

export default Layout