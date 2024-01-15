document.addEventListener('DOMContentLoaded', async () => {
    let main = document.querySelector('main');
    let response = await fetch('/final-products.json');
    let data = await response.json();
    window.products = data;
    console.log(data);
    updateProducts();

    const currencySelect = document.querySelector('select');
    const savedCurrency = localStorage.getItem('currency') || 'USD';
    currencySelect.value = savedCurrency;
    currencySelect.addEventListener('change', (e) => {
        localStorage.setItem('currency', e.target.value);
        updateProducts();
    });

    // Detay sayfasına giriş yapıldığında
    const urlParams = new URL(document.location).searchParams;
    const currencyParam = urlParams.get("currency");

    if (currencyParam) {
        localStorage.setItem('currency', currencyParam);
        currencySelect.value = currencyParam;
        updateProducts();
    }

    function updateProducts() {
        main.innerHTML = "";

        data.slice(0, 6).forEach((el) => {
            const currency = localStorage.getItem('currency') || 'USD';
            const price = el.prices.find(price => price.currency.label === currency);

            main.innerHTML += `
            
                <div class="clothes" onclick="document.location.href = '/detail.html?productID=${el.id}&currency=${currency}'">
                    <div class="clothes_picture">
                        <img src="${el.gallery[0]}" alt="">
                    </div>
                    <div class="green-circle" id="${el.id}">
                        <i class="fa-solid fa-cart-shopping fa-lg" style="color: #000000;"></i>
                    </div>
                    <div class="clothes_info">
                        <p style="font-weight: 300;">${el.name}</p>
                        <p style="font-weight: 500;">${price.amount} ${price.currency.symbol}</p>
                    </div>
                </div>`;
        });
    }
    window.addToCart = function (productId, currency) {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const existingItemIndex = cartItems.findIndex(item => item.productId === productId && item.currency === currency);

        if (existingItemIndex !== -1) {
            cartItems[existingItemIndex].quantity++;
        } else {
            cartItems.push({
                productId: productId,
                currency: currency,
                quantity: 1
            });
        }

        window.addToCart = function (productId, currency) {
            const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            const existingItemIndex = cartItems.findIndex(item => item.productId === productId && item.currency === currency);
        
            if (existingItemIndex !== -1) {
                cartItems[existingItemIndex].quantity++;
            } else {
                cartItems.push({
                    productId: productId,
                    currency: currency,
                    quantity: 1
                });
            }
        
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            alert('Ürün sepete eklendi!');
        };
        
        // Örneğin, bu fonksiyonu bir düğmeye tıklanınca çağırmak için bir örnek
        document.getElementById('addToCartButton').addEventListener('click', function () {
            addToCart(1, 'USD'); // İlk ürünü ekleyelim
            addToCart(2, 'EUR'); // İkinci ürünü ekleyelim (örnek olarak)
            // Eklemek istediğiniz diğer ürünleri buraya ekleyebilirsiniz
            // addToCart(ürünId, 'para birimi');
        });
        
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        alert('Ürün sepete eklendi!');
    };
});
