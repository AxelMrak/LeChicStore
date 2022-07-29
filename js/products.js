// Products
const productsSale = [
    {
        id: 1,
        name: `Short Skirt Baige`,
        price: `10`,
        img: `../img/sale1-product.jpg`
    },

    {
        id: 2,
        name: `Sweater Autumn`,
        price: `20`,
        img: `../img/sale2-product.jpg`
    },

    {
        id: 3,
        name: `T-shirt White`,
        price: `5`,
        img: `../img/sale3-product.jpg`
    },

    {
        id: 4,
        name: `Pants Brown Fall`,
        price: `20`,
        img: `../img/sale4-product.jpg`
    }
];

const productsDress = [
    {
        id: 5,
        name: `Dress Blue Sea`,
        price: `10`,
        img: `../img/dress1-product.jpg`
    },
    {
        id: 6,
        name: `Dress Blue Strong`,
        price: `20`,
        img: `../img/dress2-product.jpg`
    },
    {
        id: 7,
        name: `Dress Green Off`,
        price: `5`,
        img: `../img/dress3-product.jpg`
    },
    {
        id: 8,
        name: `Dress Philadelphia`,
        price: `20`,
        img: `../img/dress4-product.jpg`
    }
];

const productsAccessories = [
    {
        id: 5,
        name: `Blue Bag`,
        price: `30`,
        img: `../img/acc1.jpg`
    },
    {
        id: 6,
        name: `Gold Watch Paris`,
        price: `20`,
        img: `../img/acc2.jpg`
    },
    {
        id: 7,
        name: `Sunglasses New Book`,
        price: `5`,
        img: `../img/acc3.jpg`
    },
    {
        id: 8,
        name: `Red Bag AllNew`,
        price: `20`,
        img: `../img/acc4.jpg`
    }
];
// Array of objects
const allProducts = { productsAccessories, productsSale, productsDress };

const eur = `€`;
// Get to DOM

const saleDOM = document.getElementById(`sale`);

//FUNCION START PRODUCTS DIVS
const startProducts = () => {

    productsSale.forEach(info => {
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
        const btnProduct = document.createElement(`button`);
        btnProduct.classList.add(`btn`, `btn-outline-dark`);
        btnProduct.textContent = `Buy`;
        btnProduct.setAttribute(`marker`, info.id);
        // btnProduct.addEventListener(`click`, addProducts());
        // Add to the DOM
        cardBody.appendChild(imageCard);
        cardBody.appendChild(titleCard);
        cardBody.appendChild(price);
        cardBody.appendChild(btnProduct);
        card.appendChild(cardBody);
        saleDOM.appendChild(card);
    });

    // Get to DOM
    const dressDOM = document.getElementById(`dresses`);

    productsDress.forEach(info => {
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
        const btnProduct = document.createElement(`button`);
        btnProduct.classList.add(`btn`, `btn-outline-dark`);
        btnProduct.textContent = `Buy`;
        btnProduct.setAttribute(`marker`, info.id);
        // btnProduct.addEventListener(`click`, addProducts());
        // Add to the DOM
        cardBody.appendChild(imageCard);
        cardBody.appendChild(titleCard);
        cardBody.appendChild(price);
        cardBody.appendChild(btnProduct);
        card.appendChild(cardBody);
        dressDOM.appendChild(card);
    });

    // Get to DOM
    const accDOM = document.getElementById(`accessories`);

    productsAccessories.forEach(info => {
        // Make cards of bootstrap classes
        const card = document.createElement(`div`);
        card.classList.add(`card`);
        card.classList.add(`addItem`)
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
        const btnProduct = document.createElement(`button`);
        btnProduct.classList.add(`btn`, `btn-outline-dark`);
        btnProduct.textContent = `Buy`;
        btnProduct.setAttribute(`marker`, info.id);
        btnProduct.addEventListener(`click`, addProduct());
        // Add to the DOM
        cardBody.appendChild(imageCard);
        cardBody.appendChild(titleCard);
        cardBody.appendChild(price);
        cardBody.appendChild(btnProduct);
        card.appendChild(cardBody);
        accDOM.appendChild(card);
    });

};

const cartList = document.getElementById(`list-products`) ;
const total = document.getElementById(`total`);
const removeBtn = document.getElementById(`remove-btn`);
let cart = [];

const addProducts = event => {
    e.preventDefaul();

    if (e.target.classList.contains(`addItem`)) {
        const item = e.target.parentElement.parentElement;
        this.ReadData(item);
    }
};

const readData = (item) => {
    const infoItem = {
        
    }
}