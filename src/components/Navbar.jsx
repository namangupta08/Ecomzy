import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
       <div className='flex flex-row justify-between'>
            <NavLink to="/">
                <div>
                    <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hiclipart.com%2Ffree-transparent-background-png-clipart-mtwpx&psig=AOvVaw1A1jDdrI4Cen52quNxkFCw&ust=1722523013991000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDtoLXA0YcDFQAAAAAdAAAAABAE'/>
                </div>
            </NavLink>

            <div className='flex'>
               <NavLink to="/">
                <p>Home</p>  
               </NavLink>
               
               <NavLink to="/cart">
                <div>
                     <FaShoppingCart />
                </div>
               </NavLink>
            </div>


       </div>
    </div>
  )
}

export default Navbar
