import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const RouteNav = () => {
    const [open,SetOpen]=useState(false);
    const routes=[
{id:1,path:'/',name:'Home'},
{id:2,path:'/about',name:'About'},
{id:3,path:'/service',name:'Service'},
{id:4,path:'/contact',name:'Contact'},
{id:5,path:'*',name:'Not Found'}];
    return (
        <nav className=" bg-pink-300 p-6">
       <div className="md:hidden" onClick={()=>SetOpen(!open)} >
        {
            open===true ?<RxCross2 className="text-3xl "></RxCross2>:<AiOutlineMenuUnfold className="text-3xl "></AiOutlineMenuUnfold>
        }
       
       </div>
         <ul className={`md:flex absolute duration-1000 md:static ${open ?'top-12' :'-top-60'} bg-pink-300  px-6`}>
         {
                routes.map(route=><Link key={route.id} route={route}></Link>)
            }
         </ul>
        
        </nav>
    );
};

export default RouteNav;