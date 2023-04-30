import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import Link from 'next/link';

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Categories", subMenu: true },
    { id: 3, name: "Contact", url: "/contact" },
    
];


const MenuMobile = ({ setShowCatMenu, showCatMenu, setShowMobileMenu ,category }) => {
    return (
        <ul className='flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black'>
            {data.map((data) => {
                return (
                    <React.Fragment key={data.id}>
                        {!!data?.subMenu ? (
                            <li className='cursor-pointer py-4 px-5 border-b flex flex-col relative hover:text-gray-500'
                                onClick={() => setShowCatMenu(!showCatMenu)}
                            >
                                <div className='flex justify-between items-center'>
                                    {data.name}
                                    <BsChevronDown height={14} />
                                </div>

                                {showCatMenu && (
                                    <ul className='bg-black/[0.05] -mx-5 mt-4 -mb-4 '>
                                        {category?.map(({attributes : c , id}) => {
                                            return (
                                                <Link key={id} href={`/category/${c.slug}`} onClick={() => {
                                                     setShowMobileMenu(false)
                                                    setShowCatMenu(false)
                                                }
                                                }>
                                                    <li className='py-4 px-8 border-t flex justify-between'>
                                                        {c.name}
                                                        <span className='opacity-50 text-sm'>{c.products.data.length}</span>
                                                    </li>
                                                </Link>
                                            );

                                        })}
                                    </ul>
                                )}
                            </li>
                        ) : (
                            <Link href={data?.url} onClick={()=>setShowMobileMenu(false)}><li className='py-4 px-5 border-b'>{data.name}</li></Link>

                        )}

                    </React.Fragment>
                );
            })}
        </ul>
    )
}

export default MenuMobile