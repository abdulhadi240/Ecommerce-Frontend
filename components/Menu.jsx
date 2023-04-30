import React from 'react'
import {BsChevronDown} from 'react-icons/bs'
import Link from 'next/link';

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Categories", subMenu: true },
    { id: 3, name: "Costumize", url: "/Costumize" },
    { id: 4, name: "Contact", url: "/contact" },
    
];

const Menu = ({setShowCatMenu,showCatMenu,category}) => {
  return (
    <ul className='hidden md:flex items-center gap-8 font-medium text-black '>
{data.map((data)=>{
        return (
            <React.Fragment key={data.id}>
                {!!data?.subMenu? (
                    <li className='cursor-pointer flex items-center gap-2 relative hover:text-gray-400'
                    onMouseEnter={()=>setShowCatMenu(true)}
                    onMouseLeave={()=>setShowCatMenu(false)}
                    >
                        {data.name}
                        <BsChevronDown height={14}/>

                        {showCatMenu && (
                            <ul className='bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black hover:text-gray-400 shadow-lg'>
                                {category.map(({attributes:c , id})=>{
                                    return (
                                        <Link key={id} href={`/category/${c.slug}`}>
                                        <li className='h-12 flex justify-between items-center px-3 hover:bg-gray-200  hover:text-black rounded-md'>
                                            {c.name}
                                            <span className='opacity-50 text-sm'>{`(${c.products.data.length})`}</span>
                                        </li>
                                        </Link>
                                    );

                                })}
                            </ul>
                        )}
                    </li>
                ) : (
                   <Link href={data?.url}><li className='cursor-pointer hover:text-gray-400'>{data.name}</li></Link> 

                )}

            </React.Fragment>
        );
    })}
    </ul>
  )
}

export default Menu