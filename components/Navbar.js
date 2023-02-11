import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import DisplayDarkMode from './DisplayDarkMode'

function MobileNav({ open, setOpen }) {
    const Router = useRouter()
    const handleClick = () => {
        setOpen(false)
    }
    const menuClass = (path) => {
        const activeClass = Router.pathname === path ? "text-color-secondary text-xl tracking-wider" : "text-xl tracking-wider";
        return activeClass + ` hover:text-color-secondary`;
    }

    return (
        <div className={`absolute top-0 left-0 h-screen w-full bg-light-primary dark:bg-secondary dark:text-gray-100 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
            <div className="h-20"> {/*logo container*/}</div>
            <div className='z-20 space-y-6 grid place-items-center'>
                <div className='mt-12'>
                    <Link href="/">
                        <a onClick={handleClick} className={menuClass('/')}>
                            <p className="text-sm">Home</p>
                        </a>
                    </Link>
                </div>
                <div>
                    <Link href="/products">
                        <a onClick={handleClick} className={menuClass('/products')}>
                            <p className="text-sm">Products</p>
                        </a>
                    </Link>
                </div>
                <div>
                    <Link href="/contact">
                        <a onClick={handleClick} className={menuClass('/contact')}>
                            <p className='text-sm'>Contact</p>
                        </a>
                    </Link>
                </div>
                <div>
                    <Link href="/about">
                        <a onClick={handleClick} className={menuClass('/about')}>
                            <p className="text-sm">About</p>
                        </a>
                    </Link>
                </div>
                <div>
                    <Link href="/retailers">
                        <a onClick={handleClick} className={menuClass('/retailers')}>
                            <p className="text-sm">Retailers</p>
                        </a>
                    </Link>
                </div>
                <div className='flex items-center justify-center'>
                    <DisplayDarkMode />
                </div>
            </div>
        </div>
    )
}

export default function Navbar() {
    const Router = useRouter()
    const [open, setOpen] = useState(false)
    const navMenuClass = (path) => {
        const activeClass = Router.pathname === path ? "text-yellow-400 tracking-widest px-2" : "tracking-widest px-2";
        return activeClass + ` hover:text-color-secondary`;
    }
    return (
        <nav className="sticky top-0 z-30 flex filter drop-shadow-md bg-light-primary text-gray-300 dark:bg-secondary px-8 h-18 items-center">
            <MobileNav open={open} setOpen={setOpen} />
            <div className="w-3/12">
                <Link href={"/"}>
                    <a>
                        <Image src={"/images/logo.png"} alt={"ounpha-logo"} width={100} height={70} objectFit="contain" />
                    </a>
                </Link>
            </div>

            <div className="w-9/12 hidden mdmax:flex justify-end items-center">

                <div className="flex relative w-8 h-8 flex-col justify-between items-center md:hidden cursor-pointer" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-gray-400 rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-gray-400 rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-gray-400 rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>
            </div>

            <div className="w-full hidden md:flex text-gray-100 items-center justify-end" >
                <Link href="/">
                    <a className={navMenuClass('/')}>
                        <p className="text-xs">Home</p>
                    </a>
                </Link>
                <Link href="/products">
                    <a className={navMenuClass('/products')}>
                        <p className="text-xs">Products</p>
                    </a>
                </Link>
                <Link href="/retailers">
                    <a className={navMenuClass('/retailers')}>
                        <p className="text-xs">Retailers</p>
                    </a>
                </Link>
                <Link href="/contact">
                    <a className={navMenuClass('/contact')}>
                        <p className="text-xs">Contact</p>
                    </a>
                </Link>
                <Link href="/about">
                    <a className={navMenuClass('/about')}>
                        <p className="text-xs">About</p>
                    </a>
                </Link>
                <DisplayDarkMode />
            </div>
        </nav >
    )
}