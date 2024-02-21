function incrementval(id) {
  var element = document.getElementById(id);
  var value = parseInt(element.innerText);
  element.innerText = value + 1;
  card(id)
}

function decrementval(id) {
  var element = document.getElementById(id);
  var value = parseInt(element.innerText);
  if (value > 0) {
    element.innerText = value - 1;
  }
card(id)
  
}
 
function card(id){
  var p_name = document.getElementsByClassName("product-"+id).innerHTML;
  var price_name = document.getElementsByClassName("price-"+id).innerHTML;
  
}

// let iconcart = document.getElementById('.icon-cart');
// let body=document.querySelector('body');

// iconcart.addEventListener(click,() => {
//   body.classList.toggle('show-cart');
// })