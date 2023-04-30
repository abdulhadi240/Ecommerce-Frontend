import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import Link from 'next/link';
import Image from 'next/image';
import Wrapper from 'jsonfig.json/components/Wrapper';


const Home = () => {

    return (
        <Wrapper>
            <div className=' lg:flex gap-64 px-4 sm:px-16 mt-16 '>
                <div className=''>
                    <div className='flex flex-col mt-32'>
                        <h1 className='text-6xl font-bold  block'>Introducing New Feature</h1>
                        <p className="max-w-md mt-4 font-normal text-gray-600 text-base">
                            Create your unique and exclusive shirt with our brand-new 3D customization tool. <strong>Unleash your imagination</strong>{" "} and define your own style.
                        </p>
                    </div>
                    <Link href={'/Costumize'}><button className='mt-10 p-2 bg-black text-white '>Check Now </button></Link>
                </div>
                <div>
                    <Image src={'/shirt.png'} height={900} width={900} alt='shirt' className='mt-16 h-auto' />
                </div>
            </div>
        </Wrapper>
    )
}

export default Home