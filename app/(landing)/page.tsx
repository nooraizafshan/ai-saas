import React from 'react'
import Link from 'next/link'
import { Button } from '@/Components/ui/button'
const Landingpage = () => {
  return (
    <div>
      <Link href='/sign-in'>
      Landing page(Unprotected)
      <Button>Login </Button>
      </Link>
       <Link href='/sign-up'>
      Landing page(Unprotected)
      <Button>Register </Button>
      </Link> 
    </div>

  )
}

export default Landingpage
