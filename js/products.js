
const productsSale = {
    saleProduct1: {
        id: 1,
        name: `Short Skirt Baige`,
        price: `10`,
        img: `../img/sale1-product.jpg`
    },
    saleProduct2: {
        id: 2,
        name: `Sweater Autumn`,
        price: `20`,
        img: `../img/sale2-product.jpg`
    },
    saleProduct3: {
        id: 3,
        name: `T-shirt White`,
        price: `5`,
        img: `../img/sale3-product.jpg`
    },
    saleProduct4: {
        id: 4,
        name: `Pants Brown Fall`,
        price: `20`,
        img: `../img/sale4-product.jpg`
    }
};

const productsDress = {
    dressProduct1: {
        id: 5,
        name: `Dress Blue Sea`,
        price: `10`,
        img: `../img/dress1-product.jpg`
    },
    saleProduct2: {
        id: 6,
        name: `Dress Blue Strong`,
        price: `20`,
        img: `../img/dress2-product.jpg`
    },
    saleProduct3: {
        id: 7,
        name: `Dress Green Off`,
        price: `5`,
        img: `../img/dress3-product.jpg`
    },
    saleProduct4: {
        id: 8,
        name: `Dress Philadelphia`,
        price: `20`,
        img: `../img/dress4-product.jpg`
    }
};

const productsAccessories = {
    accProduct1: {
        id: 5,
        name: `Blue Bag`,
        price: `30`,
        img: `../img/acc1.jpg`
    },
    accProduct2: {
        id: 6,
        name: `Gold Watch Paris`,
        price: `20`,
        img: `../img/acc2.jpg`
    },
    accProduct3: {
        id: 7,
        name: `Sunglasses New Book`,
        price: `5`,
        img: `../img/acc3.jpg`
    },
    accProduct4: {
        id: 8,
        name: `Red Bag AllNew`,
        price: `20`,
        img: `../img/acc4.jpg`
    }
};

// let carrito = [];
const eur = '€';
const saleDOM = document.getElementById('sale');
// const DOMcarrito = document.querySelector('#carrito');
// const DOMtotal = document.querySelector('#total');
// const DOMbotonVaciar = document.querySelector('#boton-vaciar');

function startProducts() {
    productsSale.forEach(info => {
        const card = document.createElement(`div`);
        card.classList.add(`card`);

        const cardBody = document.createElement(`div`);
        cardBody.classList.add(`card-body`);

        const titleCard = document.createElement(`h5`);
        titleCard.classList.add(`card-title`);
        titleCard.textContent = info.name;

        const imageCard = document.createElement(`img`);
        imageCard.classList.add(`img-fluid`);
        imageCard.setAttribute(`src`, info.img);

        const price = document.createElement(`p`);
        price.classList.add(`card-text`);
        price.textContent = `${info.price}${eur}`;

        const btnProduct = document.createElement(`button`);
        btnProduct.classList.add(`btn`, `btn-outline-light`);
        btnProduct.textContent = `Buy`;
        btnProduct.setAttribute(`marker`, info.id);
        btnProduct.addEventListener(`click`)
    

        cardBody.appendChild(imageCard);
        cardBody.appendChild(titleCard);
        cardBody.appendChild(price);
        cardBody.appendChild(btnProduct);
        card.appendChild(cardBody);
        saleDOM.appendChild(card);
    });
};

startProducts();

document.addEventListener(`DOMContentLoaded`, () => {
    
    
})