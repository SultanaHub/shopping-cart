// define cart elemnts

//let productsDiv = document.querySelector('.products');
let cartButton = document.querySelector('.add_to_cart');
let cartList = document.querySelector('#cart_list');
let clearButton = document.querySelector('#clear_cart_btn');

// Define event Listner

clearButton.addEventListener('click', clearCart);
cartList.addEventListener('click', deleteFromCart);



let len= document.querySelectorAll(".add_to_cart").length; 
//console.log(len);


for( let i=0; i<len; i++){

    let cartButton = document.querySelectorAll('.add_to_cart')[i];
    cartButton.addEventListener('click',addCart);
    

    //Define functions

    function addCart(e){

    //create elemt h6

    let tag_h6 = document.createElement('h6');
    let inputText = document.getElementsByTagName('h6')[i].innerHTML + ' ';
    inputText = inputText.replace('<br>', '');
    let text_h6 = document.createTextNode(inputText);
    // console.log(text_h6);


    tag_h6.appendChild(text_h6);
    cartList.appendChild(tag_h6); 

    let link = document.createElement('a');
    link.setAttribute('href','#');
    // link.innerHTML ='   ' + '<button>Remove</button>';
    link.innerHTML = 'Remove';
    tag_h6.appendChild(link);
   
        
        //e.preventDefault();
    }
    

    // cart funtion
    count = 0;

    let countProduct = cartButton;
    countProduct.addEventListener('click', function(e){
        count++;
        // console.log(document.querySelector('#cart_icon').innerHTML);
        document.querySelector('#cart_icon').innerHTML =   count; 
        //console.log(count);

    });

} // for



//delete from cart

function deleteFromCart(e){

    if(e.target.hasAttribute("href")){
        

            let ele = e.target.parentElement;
            ele.remove();
            count--;

            if(count == 0){
                document.querySelector('#cart_icon').innerHTML = " ";
            }
            else{
                document.querySelector('#cart_icon').innerHTML = count; 
            }
            
            console.log(count);

           // removeFromLS(ele);
        
        
    }
}


//clear cart funtion

function clearCart(e){
    
    if(confirm("Are you sure?")){
        cartList.innerHTML = " ";
        document.querySelector('#cart_icon').innerHTML = " ";
        count = 0;

    }

    //localStorage.clear();

}