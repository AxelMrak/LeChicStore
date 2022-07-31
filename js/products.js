// Products
const products = [
    {
        id: 1,
        cat: `sale`,
        name: `Short Skirt Baige`,
        price: 10,
        img: `../img/sale1-product.jpg`
    },
    {
        id: 2,
        cat: `sale`,
        name: `Sweater Autumn`,
        price: 20,
        img: `../img/sale2-product.jpg`
    },
    {
        id: 3,
        cat: `sale`,
        name: `T-shirt White`,
        price: 5,
        img: `../img/sale3-product.jpg`
    },
    {
        id: 4,
        cat: `sale`,
        name: `Pants Brown Fall`,
        price: 20,
        img: `../img/sale4-product.jpg`
    },
    {
        id: 5,
        cat: `dress`,
        name: `Dress Blue Sea`,
        price: 10,
        img: `../img/dress1-product.jpg`
    },
    {
        id: 6,
        cat: `dress`,
        name: `Dress Blue Strong`,
        price: 20,
        img: `../img/dress2-product.jpg`
    },
    {
        id: 7,
        cat: `dress`,
        name: `Dress Green Off`,
        price: 5,
        img: `../img/dress3-product.jpg`
    },
    {
        id: 8,
        cat: `dress`,
        name: `Dress Philadelphia`,
        price: 20,
        img: `../img/dress4-product.jpg`
    },
    {
        id: 9,
        cat: `acc`,
        name: `Blue Bag`,
        price: 30,
        img: `../img/acc1.jpg`
    },
    {
        id: 10,
        cat: `acc`,
        name: `Gold Watch Paris`,
        price: 20,
        img: `../img/acc2.jpg`
    },
    {
        id: 11,
        cat: `acc`,
        name: `Sunglasses New Book`,
        price: 5,
        img: `../img/acc3.jpg`
    },
    {
        id: 12,
        cat: `acc`,
        name: `Red Bag AllNew`,
        price: 20,
        img: `../img/acc4.jpg`
    }
];

//Empty cart
let cart = [];

// CURRENCY THAT I WILL USE
const eur = `€`;

// Get to DOM 
const cartAppear = document.getElementById(`bag`);
const bagDOM = document.getElementById(`cart-container`);
const totalDOM = document.getElementById(`total`);
const btnRemoveDOM = document.getElementById(`remove-btn`)
const saleDOM = document.getElementById(`sale`);
const dressDOM = document.getElementById(`dresses`);
const accDOM = document.getElementById(`accessories`);
const bagIcoDOM = document.getElementById(`bag-icon`);

// Filters in array PRODUCTS 
const saleProducts = products.filter(value => {
        if (value.cat == `sale`) {
            return value
        }
    });
    const dressProducts = products.filter(value => {
        if (value.cat == `dress`) {
            return value;
        }
    });
    const accProducts = products.filter(value => {
        if (value.cat == `acc`) {
            return value;
        }
    });

    
//FUNCTIONS

const startProducts = () => {
    saleProducts.forEach(info => {
        // Make cards of bootstrap classes
        const card = document.createElement(`div`);
        card.classList.add(`card`);
        const cardBody = document.createElement(`div`);
        cardBody.classList.add(`card-body`);
        const titleCard = document.createElement(`h5`);
        titleCard.classList.add(`card-title`);
        titleCard.textContent = info.name;
        const imageCard = document.createElement(`img`);
        imageCard.setAttribute(`src`, info.img);
        const price = document.createElement(`p`);
        price.classList.add(`card-text`);
        price.textContent = `${info.price}${eur}`;
        price.style.fontWeight = `600`;
        const btnProduct = document.createElement(`button`);
        btnProduct.classList.add(`btn`, `btn-outline-dark`);
        btnProduct.textContent = `Buy`;
        btnProduct.setAttribute(`marker`, info.id);
        btnProduct.addEventListener(`click`, addProduct);
        // Add to the DOM
        cardBody.appendChild(imageCard);
        cardBody.appendChild(titleCard);
        cardBody.appendChild(price);
        cardBody.appendChild(btnProduct);
        card.appendChild(cardBody);
        saleDOM.appendChild(card);
    }); 

    dressProducts.forEach(info => {
        // Make cards of bootstrap classes
        const card = document.createElement(`div`);
        card.classList.add(`card`);
        const cardBody = document.createElement(`div`);
        cardBody.classList.add(`card-body`);
        const titleCard = document.createElement(`h5`);
        titleCard.classList.add(`card-title`);
        titleCard.textContent = info.name;
        const imageCard = document.createElement(`img`);
        imageCard.setAttribute(`src`, info.img);
        const price = document.createElement(`p`);
        price.classList.add(`card-text`);
        price.textContent = `${info.price}${eur}`;
        price.style.fontWeight = `600`;
        const btnProduct = document.createElement(`button`);
        btnProduct.classList.add(`btn`, `btn-outline-dark`);
        btnProduct.textContent = `Buy`;
        btnProduct.setAttribute(`marker`, info.id);
        btnProduct.addEventListener(`click`, addProduct);
        // Add to the DOM
        cardBody.appendChild(imageCard);
        cardBody.appendChild(titleCard);
        cardBody.appendChild(price);
        cardBody.appendChild(btnProduct);
        card.appendChild(cardBody);
        dressDOM.appendChild(card);
    }); 

    accProducts.forEach(info => {
        // Make cards of bootstrap classes
        const card = document.createElement(`div`);
        card.classList.add(`card`);
        const cardBody = document.createElement(`div`);
        cardBody.classList.add(`card-body`);
        const titleCard = document.createElement(`h5`);
        titleCard.classList.add(`card-title`);
        titleCard.textContent = info.name;
        const imageCard = document.createElement(`img`);
        imageCard.setAttribute(`src`, info.img);
        const price = document.createElement(`p`);
        price.classList.add(`card-text`);
        price.textContent = `${info.price}${eur}`;
        price.style.fontWeight = `600`;
        const btnProduct = document.createElement(`button`);
        btnProduct.classList.add(`btn`, `btn-outline-dark`);
        btnProduct.textContent = `Buy`;
        btnProduct.setAttribute(`marker`, info.id);
        btnProduct.addEventListener(`click`, addProduct);
        // Add to the DOM
        cardBody.appendChild(imageCard);
        cardBody.appendChild(titleCard);
        cardBody.appendChild(price);
        cardBody.appendChild(btnProduct);
        card.appendChild(cardBody);
        accDOM.appendChild(card);
    }); 
    
   

};

const addProduct = (event) => {
    cart.push(event.target.getAttribute(`marker`));
    updateCart();
};

const updateCart = () => {
    bagDOM.textContent = ``;

    const bagWithoutDuplicates = [...new Set(cart)];

    bagWithoutDuplicates.forEach(item => {
        const myItem = products.filter(itemProducts => {
            return itemProducts.id === parseInt(item);
        });

        const itemsNumber = cart.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0)

        const myList = document.createElement(`li`);
        myList.classList.add(`list-group-item`, `text-right`, `mx-2`);
        myList.textContent = `${itemsNumber} x ${myItem[0].name} - ${myItem[0].price}${eur}`

        const btnRemove = document.createElement(`button`);
        btnRemove.classList.add(`btn`, `btn-danger`, `mx-5`);
        btnRemove.textContent = `X`;
        btnRemove.style.marginLeft = `1rem`;
        btnRemove.style.margin = `1rem`
        btnRemove.dataset.item = item;
        btnRemove.addEventListener(`click`, removeItem)

        myList.appendChild(btnRemove);
        bagDOM.appendChild(myList);
    });
    totalDOM.textContent = calculateTotal();
};

const removeItem = (event) => {
    const id = event.target.dataset.item;

    cart = cart.filter(cartId => {
        return cartId !== id;
    });

    updateCart();
}

const calculateTotal = () => {
    return cart.reduce((total, item) => {
        const myItem = products.filter(itemBase => {
            return itemBase.id === parseInt(item);
        });
        return total + myItem[0].price;
    }, 0).toFixed(2);
};

const emptyCart = () => {
    cart = [];
    updateCart();
}

btnRemoveDOM.addEventListener(`click`, emptyCart)
startProducts();
updateCart()

const appearBagInDOM = event => {
    // -30vw OCULTO;
    // 0px VISIBLE
console.log(event);
};

bagIcoDOM.addEventListener(`click`, appearBagInDOM);

