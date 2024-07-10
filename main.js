
var products = [
    { name: "iPhone 15 Pro Max", brand: "iphone", price: 5500, image: "./images/iphone 15 pro max.jpg" },
    { name: "iPhone 12 Pro Max", brand: "iphone", price: 2500, image: "./images/iphone 12 pro max.jpg" },
    { name: "iPhone 12", brand: "iphone", price: 2000, image: "./images/iphone 12.jpg" },
    { name: "Samsung Galaxy S21", brand: "samsung", price: 3200, image: "./images/samsung-galaxy-s21-noir.jpg" },
    { name: "Samsung Galaxy A30", brand: "samsung", price: 870, image: "./images/sumsung a30.jpg" },
    { name: "Samsung A20", brand: "samsung", price: 700, image: "./images/samsung a20.jpg" },
    { name: "Huawei Nova 11 Pro", brand: "huawei", price: 2500, image: "./images/huawei-nova-11-vert.jpg" },
    { name: "Huawei Nova Y90", brand: "huawei", price: 850, image: "./images/huawei-nova-y90-bleu.jpg" },
    { name: "Huawei Nova 9", brand: "huawei", price: 2000, image: "./images/huawei-nova-9.jpg" },
    { name: "Redmi Note 11 Pro", brand: "redmi", price: 1000, image: "./images/redmi note 11.jpg" },
    { name: "Redmi Note 10 Pro Max", brand: "redmi", price: 950, image: "./images/Redmi note 10 pro max.jpg" },
    { name: "Xiaomi Redmi Note 12S", brand: "redmi", price: 900, image: "./images/xiaomi_redmi_note_12_gris_.jpg" }
]

function displayProducts(filteredProducts) {
    var productsContainer = document.getElementById('products')
    productsContainer.innerHTML = ''
    for (var i = 0; i < filteredProducts.length; i++) {
        var product = makeProduct(filteredProducts[i])
        productsContainer.appendChild(product)
    }
}

function makeProduct(productData) {
    var product = document.createElement('div')
    product.className = 'product'
    product.innerHTML = '<img src="' + productData.image + '" alt="' + productData.name + '">' +
                        '<p>' + productData.name + '</p>' +
                        '<p>' + productData.price + ' Dt</p>' +
                        '<button onclick="buyProduct(\'' + productData.name + '\', ' + productData.price + ')">Buy</button>'
    return product
}

function filterItems(brand) {
    var filteredProducts = []
    for (var i = 0; i < products.length; i++) {
        if (products[i].brand === brand || brand === 'all') {
            filteredProducts.push(products[i])
        }
    }
    displayProducts(filteredProducts)
}

function buyProduct(name, price) {
    var form = document.getElementById('purchase-form')
    form.style.display = 'block'
    form.dataset.name = name
    form.dataset.price = price
}

function hideForm() {
    var form = document.getElementById('purchase-form')
    form.style.display = 'none'
    document.getElementById('name').value = ''
    document.getElementById('address').value = ''
    document.getElementById('amount').value = ''
    document.getElementById('error-message').textContent = ''
}

function submitForm() {
    var name = document.getElementById('name').value
    var address = document.getElementById('address').value
    var amount = document.getElementById('amount').value
    var errorMessage = document.getElementById('error-message')

    if (!name || !address || !amount) {
        errorMessage.textContent = 'All fields are required.'
        return;
    }

    var price = document.getElementById('purchase-form').dataset.price
    if (parseFloat(amount) !== parseFloat(price)) {
        errorMessage.textContent = 'Incorrect amount. Please enter the correct amount.'
        return;
    }

    alert('Purchase successful! Name: ' + name + ', Address: ' + address + ', Amount: ' + amount + ' Dt')
    hideForm()
}


window.onload = function() {
    filterItems('all')
}