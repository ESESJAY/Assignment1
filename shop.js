/*  Call All the add carts*/
let carts = document.querySelectorAll('.add-cart');
let products = 
[
{
    name: 'Cyan Night Play Tshirt',
    tag: 'cyannptshirt',
    price: 35,
    inCart: 0
},
  
{
    name: 'Black Night Play Tshirt',
    tag: 'blacknptshirt',
    price: 35,
    inCart: 0
},

{
    name: 'Ochre YOA Tshirt',
    tag: 'ochreyoashirt',
    price: 35,
    inCart: 0
},

{
    name: 'White YOA Tshirt',
    tag: 'whiteyoashirt',
    price: 35,
    inCart: 0
},

{
    name: 'Greige Tsubame Tshirt',
    tag: 'greigetsushirt',
    price: 35,
    inCart: 0
},

{
    name: 'Orange Love Letter Pullover',
    tag: 'orangepullover',
    price: 60,
    inCart: 0
},

{
    name: 'Light Black Nice To Meet You Hoodie',
    tag: 'lightblackhoodie',
    price: 75,
    inCart: 0
},

{
    name: 'Greige Nice To Meet You Hoodie',
    tag: 'greigeblackhoodie',
    price: 75,
    inCart: 0
},

{
    name: 'Red Yoasobi Asian Pattern Facetowel',
    tag: 'redasianpatfacetowel',
    price: 15,
    inCart: 0
},

{
    name: 'Blue Yoasobi Asian Pattern Facetowel',
    tag: 'blueasianpatfacetowel',
    price: 15,
    inCart: 0
},

{
    name: 'Cyan Yoasobi Beach Towel',
    tag: 'cyanbeachtowel',
    price: 40,
    inCart: 0
},

{
    name: 'White Yoasobi Beach Towel',
    tag: 'whitebeachtowel',
    price: 40,
    inCart: 0
},

{
    name: 'Yellow & Blue Nice To Meet You Facetowel',
    tag: 'yxbntmyfacetowel',
    price: 15,
    inCart: 0
},

{
    name: 'Blue & Brown Nice To Meet You Facetowel',
    tag: 'blxbrntmyfacetowel',
    price: 15,
    inCart: 0
},

{
    name: 'Dark Blue Night Play Beach Towel',
    tag: 'darkbluenpbeachtowel',
    price: 40,
    inCart: 0
},

{
    name: 'Light Blue Yoasobi Asian Pattern Facetowel',
    tag: 'lightblueasianpatfacetowel',
    price: 15,
    inCart: 0
}
];

for (let i=0; i < carts.length; i++)
{
    carts[i].addEventListener('click', () =>
    {
        cartNum(products[i]);
        totalCost(products[i]);
    })
}
/* Always display the cart value stored in local storage*/
function loadcartNum()
{
    let productNum = localStorage.getItem('cartNum');
    if(productNum)
    {
        document.querySelector('.cart span').textContent = productNum;
    }
}

function cartNum(product)
{

    console.log("The product clicked is", product);
    let productNum = localStorage.getItem('cartNum');
    /* Convert to integer*/
    productNum = parseInt(productNum);
    /* if value exists*/
    if(productNum )
    {
        localStorage.setItem('cartNum', productNum + 1);
        /* Updating the span value in the cart*/ 
        document.querySelector('.cart span').textContent = productNum + 1 
    }
    /* if no value exist*/
    else
    {
        localStorage.setItem('cartNum', 1);
        /* Select the span value in the html*/ 
        document.querySelector('.cart span').textContent =  1 
    }
    
    setItems(product);
}
function setItems(product)
{
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems)
    console.log("My cartItems are" , cartItems);
    /* Check if anything exists inside*/
    if(cartItems != null)
    {
        /* check if the item exist in the local storage */
        if(cartItems[product.tag] == undefined)
        {
            /* update cart item from before and add additional item */
            cartItems = {
                ...cartItems,[product.tag] : product
            }
        }
        cartItems[product.tag].inCart += 1;
    }
    else
    {
        product.inCart = 1;
    cartItems = { 
        [product.tag]: product
    }
    }
    
    /* Change the data to string */
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

/* Total cost function */
function totalCost(product)
{
    //console.log("The product price is" , product.price);
    let cartCost = localStorage.getItem('totalCost');
    console.log("My cartCost is" , cartCost);
    
    if(cartCost != null)
    {
        /*Convert to number to addition */
        cartCost = parseInt(cartCost);
        /* add on new item price to the existing total price */
        localStorage.setItem("totalCost" , cartCost + product.price);
    }
    else
    {
        localStorage.setItem("totalCost" , product.price);  
    }
    
}

loadcartNum();