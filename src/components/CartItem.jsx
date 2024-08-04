import React from 'react'
import { MdDelete } from "react-icons/md";

function CartItem({item , itemIndex}) {
  return (
    <div>
      
      <div>

        <div>
          <img src={item.image}/>
        </div>
         
         <div>


            <h1>{item.title}</h1>

            <h1>{item.decription}</h1>

            <div>
              <p>{item.price}</p>
              <div>
                <MdDelete/>
              </div>
            </div>


         </div>


      </div>

    </div>
  )
}

export default CartItem
