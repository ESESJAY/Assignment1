/*  Call All the add carts*/
let carts = document.querySelectorAll('.add-cart');
let products = 
[
{
    name: 'Cyan Night Play Tshirt',
    tag: 'Shirt-1',
    price: 35,
    inCart: 0
},
  
{
    name: 'Black Night Play Tshirt',
    tag: 'shirt-2',
    price: 35,
    inCart: 0
},

{
    name: 'Ochre YOA Tshirt',
    tag: 'shirt-3',
    price: 35,
    inCart: 0
},

{
    name: 'White YOA Tshirt',
    tag: 'shirt-4',
    price: 35,
    inCart: 0
},

{
    name: 'Greige Tsubame Tshirt',
    tag: 'shirt-5',
    price: 35,
    inCart: 0
},

{
    name: 'Orange Love Letter Pullover',
    tag: 'shirt-6',
    price: 60,
    inCart: 0
},

{
    name: 'Light Black Nice To Meet You Hoodie',
    tag: 'shirt-7',
    price: 75,
    inCart: 0
},

{
    name: 'Greige Nice To Meet You Hoodie',
    tag: 'shirt-8',
    price: 75,
    inCart: 0
},

{
    name: 'Red Yoasobi Asian Pattern Facetowel',
    tag: 'towel-1',
    price: 15,
    inCart: 0
},

{
    name: 'Blue Yoasobi Asian Pattern Facetowel',
    tag: 'towel-2',
    price: 15,
    inCart: 0
},

{
    name: 'Cyan Yoasobi Beach Towel',
    tag: 'towel-3',
    price: 40,
    inCart: 0
},

{
    name: 'White Yoasobi Beach Towel',
    tag: 'towel-4',
    price: 40,
    inCart: 0
},

{
    name: 'Yellow & Blue Nice To Meet You Facetowel',
    tag: 'towel-5',
    price: 15,
    inCart: 0
},

{
    name: 'Blue & Brown Nice To Meet You Facetowel',
    tag: 'towel-6',
    price: 15,
    inCart: 0
},

{
    name: 'Dark Blue Night Play Beach Towel',
    tag: 'towel-7',
    price: 40,
    inCart: 0
},

{
    name: 'Light Blue Yoasobi Asian Pattern Facetowel',
    tag: 'towel-8',
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
function displayCart()
{
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');
    /* Check if there is any values */
    if(cartItems && productContainer)
    {
         productContainer.innerHTML = '';
        /* Check values in key */
        Object.values(cartItems).map(item => {
            /* include += to ensure it not being overwritten */
            productContainer.innerHTML += `
            <div class="product">
                <ion-icon name="close-circle" style="font-size:25px;
                color:blue;
                margin-left: 5px;
                margin-right: 5px;"></ion-icon>
                <img src="/Image/${item.tag}.jpg" style="width:150px;height:150px;">
                <span>${item.name}</span>
            </div>
            <div style="width: 15%;
            border-bottom: 2px solid #f2285a;
            display: flex;
            align-items: center;">$${item.price}</div>
            <div class="quantity">
                <ion-icon class="decrease" name="remove-circle" style="font-size:25px;
                color:blue;
                margin-left: 5px;
                margin-right: 5px;"></ion-icon>
                <span>${item.inCart}</span>
                <ion-icon class="increase" name="add-circle" style="font-size:25px;
                color:blue;
                margin-left: 5px;
                margin-right: 5px;"></ion-icon>
            </div>
            <div class="total">
                $${item.inCart * item.price}.00
            </div>
            `
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Basket Total
                </h4>
                <h4 class="basketTotal">
                 $${cartCost},00
                </h4>
            `;
    
    }
}

loadcartNum();
displayCart();