import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div className="container">
    <Head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Home</title>
        
    </Head>
    
        <header>
            <ul className="nav">
                <Link href="/"><li>VTO</li></Link>
                <Link href=""><li>Brands</li></Link>
                <li className='cate'>Category
                    <ul className='categorys'>
                        <li className='category'>Tshirt</li>
                        <li className='category'>Jacket</li>
                        <li className='category'>Skirt</li>
                        <li className='category'>Shorts</li>
                        <li className='category'>Vest</li>
                        
                    </ul>
                </li>
            </ul>
        </header>
        <main>
        {children}
        </main>
    
    </div>
  )
}

export default Layout