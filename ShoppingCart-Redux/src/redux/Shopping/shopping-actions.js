import * as actionTypes from "./shopping-types";

export const addToCart = (itemID) => {
  console.log(itemID)
  fetch(`http://localhost:5000/singleCart/${itemID}`)
  .then(res => res.json())
  .then(data => {
    if(data.data.length>0 ){
      const formData = new FormData()
      formData.append("id",itemID)
      formData.append("quantity",data.data[0].quantity + 1)
      fetch(`http://localhost:5000/updatedata`,{
            method: 'PUT',
            body: formData
        })
    }else{
      const formData = new FormData()
      formData.append("product_id",itemID)
      formData.append("quantity",1)
     
      fetch('http://localhost:5000/add',{
          method: 'POST',
          body:formData
      })
    }
  })
  
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const setToCart = (item) => {
  return {
    type: actionTypes.SET_TO_CART,
    payload:item,
  };
};

export const removeFromCart = (itemID) => {
  const formData = new FormData();
  formData.append('id', itemID);
  fetch(`http://localhost:5000/dataDeleteFromCart`,{
      method: 'DELETE',
      body: formData
  })
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const checkOutFromCart = (cart) => {
  let count=0;
  cart.map((item) =>
     {
      count++
      if(item.id){
        const formData = new FormData();
        formData.append('id', item.id);
        fetch(`http://localhost:5000/dataDeleteFromCart`,{
            method: 'DELETE',
            body: formData
        })
      }
     }
  )
  if(count == cart?.length ){
    window.location.reload()
  }
  return {
    type: actionTypes.CHECKOUT_FROM_CART,
    payload:cart
  };
};



export const adjustItemQty = (itemID, qty) => {
  const formData = new FormData()
  formData.append("id",itemID)
  formData.append("quantity",qty)
  fetch(`http://localhost:5000/updatedataCart`,{
        method: 'PUT',
        body: formData
    })
  return {
    type: actionTypes.ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty,
    },
  };
};


export const loadCurrentItem = (item) => {
  // var getData;
  // fetch(`http://localhost:5000/singleProduct/${item.id}`)
  // .then(res => res.json())
  // .then(data => {
  //   getData = data
   
  // })
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};
