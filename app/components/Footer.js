import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='flex justify-center py-2'>&copy; 2023 designed by &nbsp; <p></p><Link href="https://elikur.netlify.app" target='_blank' className='text-slate-400'>Elie Kuradusenge</Link> </footer>
  )
}

export default Footer