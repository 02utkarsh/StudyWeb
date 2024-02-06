import React, { useEffect,useState } from 'react'
import { Link, matchPath } from 'react-router-dom'
import Logo from '../assets/Logo/Logo-Full-Light.png'
import {NavbarLinks} from '../data/navbar-links'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { MdOutlineShoppingCart } from "react-icons/md";
import  ProfileDropDown  from './core/auth/ProfileDropDown'
import { apiConnector } from '../services/apiconnector'
import { categories } from '../services/api'
import { IoIosArrowDropdown } from "react-icons/io";


const subLinks=[
    {
        title:"pyhton",
        link:"/category/pyhton"
    },
    {
        title:"Webdev",
        link:"/category/webdev"
    }
];

export const Navbar = () => {
    const {token}=useSelector((state)=>state.auth);
    const {user}=useSelector((state)=>state.profile);
    const {totalItems}=useSelector((state)=>state.cart);
    const [subLinks,setsubLinks]=useState([]);

    const fetchsublinks=async()=>{
        try {
            const result= await apiConnector("GET",categories.CATEGORIES_API);
            console.log("Printing Sublinks result:",result);
            setsubLinks(result.data.data)
        } catch (error) {
            console.log("some error occured "+error)
        }
    }
    useEffect(()=>{
        console.log("printing token",token);
     fetchsublinks()   
    },[])

    const location =useLocation();
    const matchRoute=(route)=>{
        return matchPath({path:route},location.pathname);
    }
    return (    
    <div className=' flex h-14 items-center justify-center border-b-[1px] border-b-richblack-200 bg-richblack-900'>
    <div className='flex w-11/12 max-w-maxContent items-center justify-evenly '>
        
            <Link to={'/'} width={160} height={42} loading='lazy'>
                <img src={Logo}/> 
            </Link>
        <nav>
            <ul className='flex gap-x-6 text-richblack-25 relative'>
            {
                NavbarLinks.map((link,index) =>(
                    <li key={index}>
                        {
                            link.title==="Catalog"?(
                            <div className=' relative group gap-2   '>
                                <p className='flex gap-2 items-center'>
                                    {link.title}
                                    <IoIosArrowDropdown />
                                </p>
                                <div className=' translate-y-[50%] invisible absolute z-50  left-[50%] top-[26%] flex flex-col rounded-md bg-white  text-richblack-900 opascity-100 transition-all duration-200 group-hover:visible group-hover:opacity-100 w-[250px] h-fit pl-2'>
                                    <div className='flex flex-col p-1 h-fit'>
                                        <Link to={"/category/pyhton"}>
                                            pyhton
                                        </Link>
                                        <Link to={"/category/webdev"}>
                                            Webdev
                                        </Link>
                                    </div>
                                    {/* {
                                        
                                        subLinks.length?(
                                            subLinks.map((subLink,index)=>{
                                                <Link to={`${subLink.link}`} key={index}>
                                                    <p>{subLink.title}</p>
                                                </Link>
                                        })
                                ):
                             (<div></div>)} */}
                                        
                                </div>
                                <div className=' absolute left-[75%] top-[90%] h-6 w-6 rotate-45 rounded-sm  bg-white z-10 invisible group-hover:visible transition-all duration-200' ></div>
                            </div>
                            ):(
                                <Link  to={link?.path}>
                                <p className={`${matchRoute(link?.path)?"text-yellow-25":"text-richblack-25"}`}>
                                    {link.title}
                                </p>
                                </Link>
                            )
                        }
                    </li>
                ))
            }
            </ul>
        </nav>

        <div className='flex gap-x-4 items-center'>
            {       
                user && user?.accountType!="Instructor"&&(
                    <Link to="/dashboard/cart">
                    <MdOutlineShoppingCart />
                    {
                            totalItems > 0 && (
                                <span>
                                    {totalItems}
                                </span>
                            )
                        }
                    </Link>
                )
            }
            {
                token==null&&(
                    <Link to='/login' className='border border-richblack-600 bg-richblack-700 text-richblack-300  px-[12px] py-[4px] rounded-md'>
                        <button>
                            Log in
                        </button>
                    </Link>
                )
            }
            {
                token==null&&(
                    <Link to='/signup' className='border border-richblack-600 bg-richblack-700 text-richblack-300  px-[12px] py-[4px] rounded-md' >
                        <button>
                            Sign Up
                        </button>
                    </Link>
                )
            }
            {
                token!==null && <ProfileDropDown/>
                
            }
        </div>


    </div>
    </div>
  )
}