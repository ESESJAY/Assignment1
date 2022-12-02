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
    name: 'Red Yoasobi Asian Pattern Facetowel',
    tag: 'redasianpatfacetowel',
    price: 15,
    inCart: 0
},
]

for (let i=0; i < carts.length; i++)
{
    carts[i].addEventListener('click', () =>
    {
        cartNum();
    })
}

function cartNum()
{
    let productNum = localStorage.getItem('cartNum');
    /* Convert to integer*/
    productNum = parseInt(productNum);
    localStorage.setItem('cartNum',1);
}