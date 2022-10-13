'use strict';

const cartIconWrap = document.querySelector('.cartIconWrap');

cartIconWrap.addEventListener('click', event => {
    document.querySelector('.basket').classList.toggle('hidden');
});

const items = document.querySelectorAll('.featuredItem');

items.forEach(el =>
    el.addEventListener('click', event => {
        if (event.target.tagName == 'BUTTON') {

            const item = event.currentTarget;
            let product = new Product(item.dataset.id, item.dataset.name, item.dataset.count, item.dataset.price);

            product = AddCount(product);
            AddToCard();
        }
    }));

let products = [];
class Product {
    constructor(id, name, count, price) {
        this.id = id,
            this.name = name,
            this.count = count,
            this.price = price
    }

    countSum() {
        return this.count * this.price;
    }
}

function AddCount(product) {

    for (let i = 0; i < products.length; i++) {
        if (products[i].id == product.id) {
            products[i].count += 1;
            return products[i];
        }
    }

    product.count = 1;
    products.push(product);
    return product;
}

function AddToCard() {

    const els = document.querySelectorAll('.basketRow');

    els.forEach(el => {
        if (!el.classList.contains('basketHeader')) {
            el.remove();
        }
    })

    if (products.length != 0) {
        const lastRow = document.querySelector('.basketTotal');
        let sum = 0;
        let count = 0;

        products.forEach(el => {
            const sumEl = el.countSum();
            lastRow.insertAdjacentHTML('beforebegin', `<div class="basketRow">
                        <div>${el.name}</div>
                        <div>${el.count}</div>
                        <div>${el.price}</div>
                        <div>${sumEl}</div>
                    </div>`);
            sum += +sumEl;
            count += el.count;
        })

        document.querySelector('.basketTotalValue').textContent = sum;
        document.querySelector('.cartIconWrap').querySelector('span').textContent = count;
    }
}