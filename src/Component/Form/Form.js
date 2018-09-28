import React from 'react';

export default function ({handleImageInput,handleProductNum,handlePrice,resetForm}) {
    
        return(
         <div className='Form'>
            <div className='form_img_preview'></div>
            <p>Image URL:</p>
            <input type='text' onChange={handleImageInput} placeholder='Image'></input>
            <p>Product Name:</p>
            <input type="text" onChange={handleProductNum} placeholder='Product'></input>
            <p>Price:</p>
            <input type='text' onChange={handlePrice} placeholder='0'></input>
            <div className="form_button_box">
              <button onClick={resetForm}>Cancel</button>
              <button>Add to Inventory</button>
            </div>
          </div>
        )
    
}