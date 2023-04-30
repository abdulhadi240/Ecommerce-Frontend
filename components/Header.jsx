import React, { useEffect, useState } from 'react'
import Wrapper from './Wrapper';
import Image from 'next/image';
import Link from 'next/link';
import Menu from './Menu';
import MenuMobile from './MenuMobile'
import { useSession, signIn, signOut } from 'next-auth/react'
import { BsCart, BsSearch } from 'react-icons/bs'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BiMenuAltRight } from 'react-icons/bi'
import { VscChromeClose } from 'react-icons/vsc'
import { AiFillCaretDown } from 'react-icons/ai'

import { fetchData } from 'jsonfig.json/utils/api'
import { Search } from './Search';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const Header = () => {

  const { data: session } = useSession()

  const { push, asPath } = useRouter();

  const handleSignIn = () => push(`/auth/signin?callbackUrl=${asPath}`)

  const handleSignOut = async () => {
    const data = await signOut({ redirect: false, callbackUrl: '/' })

    push(data.url)
  }

  const { cartItems } = useSelector((state => state.cart))

  const [showmobileMenu, setShowMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState('translate-y-0');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [category, setCategory] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [color , setColor] = useState('bg-transparent');




  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !showmobileMenu) {
        setShow('-translate-y-80')
        setColor('bg-white')
      } else {
        setShow('shadow-sm')
      }
    } else {
      setShow('translate-y-0')
      setColor('bg-transparent')
    }
    setLastScrollY(window.scrollY);
  }



  useEffect(() => {
    window.addEventListener("scroll", controlNavbar)
    return () =>
      window.removeEventListener("scroll", controlNavbar)
  }, [lastScrollY])

  const fetchCategories = async () => {
    const { data } = await fetchData("/api/categories?populate=*")
    setCategory(data);
  }

  useEffect(() => {
    fetchCategories();

  }, [])


  return (
    <header className={`w-full h-[50px] md:h-[80px]  flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show} ${color}`}>
      <Wrapper className="h-[60px] flex justify-between items-center mt-4 sm:mt-0">

        <Link href="/"><Image src='/logo.svg' width={100} height={100} alt='image' className='w-16' /></Link>
        <Menu
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
          category={category}
        />

        {showmobileMenu && <MenuMobile showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} category={category} />}
        {/* {showmobileMenu && <MenuMobile showCatMenu={showCatMenu} setShowMobileMenu={setShowMobileMenu} setShowCatMenu={setShowCatMenu}/>} */}

        <div className='flex gap-3'>


          {/* SEARCH */}

          <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center  items-center hover:bg-black/[0.05] cursor-pointer relative' onClick={() => { setShowSearch(!showSearch) }}>
            <BsSearch className='text-[18px] md:text-[20px] ' />
          </div>

          {/* Icon Start */}

          <div className='flex items-center gap-2 text-black'>

            <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'>
              <IoMdHeartEmpty className='text-[18px] md:text-[24px]' />
              <div className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px] '>
                25</div>
            </div>

          </div>
          {/* Icon End */}




          {/* Icon Start */}
          <Link href='/Cart'>
            <div className='flex items-center gap-2 text-black'>

              <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'>

                <>
                  <BsCart className='text-[15px] md:text-[20px]' />
                  {cartItems.length > 0 && (
                    <div className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px] '>
                      {cartItems.length}
                    </div>
                  )}
                </>

              </div>

            </div>
          </Link>



          {/* Icon End */}

          <div className='overflow-hidden'>
            {showSearch && (<Search showSearch={showSearch} setShowSearch={setShowSearch} />)}
          </div>

          {session ? (
            <>
              <div className='flex flex-col group mt-3 relative' onMouseEnter={() => setSignIn(true)} onMouseLeave={() => setSignIn(false)}>

                <div className='flex gap-1 group' >
                  <h1>{session.user.name}</h1>
                  <AiFillCaretDown className='mt-1' />
                </div>

                {signIn && (
                  <button className=' text-black  hover:bg-black hover:text-white border-2 border-black pl-1 pr-1 tracking-wide w-24 sm:w-32 mb-2 sm:mb-1 hover:transition-all  rounded-md absolute top-6 ' onClick={handleSignOut}>Sign out</button>

                )}


              </div>

            </>
          ) : (

            <button className=' text-black hover:bg-black hover:text-white border-2 border-black  pl-1 pr-1 tracking-wide w-24 sm:w-32 mb-2 sm:mb-1 hover:transition-all  rounded-md' onClick={handleSignIn}>Sign In </button>

          )}

        </div>


        {/* Mobile Icon */}
        <div className=' -mr-2 w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer md:hidden'>
          {showmobileMenu ? (
            <VscChromeClose className='text-[16px]'
              onClick={() => setShowMobileMenu(false)} />
          ) :
            (
              <BiMenuAltRight className='text-[20px]'
                onClick={() => { setShowMobileMenu(true) }} />
            )
          }

        </div>



      </Wrapper>
    </header>
  )
}

export default Header