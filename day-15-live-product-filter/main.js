const products = document.querySelector('.products'),
    listItems = [],
    getData = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                products.innerHTML = ''

                data.map(product => {
                    const div = document.createElement('div')
                    div.setAttribute('class', 'product')
                    listItems.push(div)

                    div.innerHTML = `
                        <img class="product__img" src="${product.image}" alt="">
                        <div class="product__details">
                            <div class="product__name">${product.title.slice(0, 30)}</div>
                            <div class="product__price">$${product.price}</div>
                        </div>
                    `

                    products.appendChild(div)
                })
            })
    },
    productFilter = search => {
        listItems.map(item =>
            (item.innerText.toLowerCase().includes(search.toLowerCase()))
                ? item.classList.remove('hide')
                : item.classList.add('hide')
        )
    }

document.querySelector('#filter').addEventListener('input', e => productFilter(e.target.value))

getData()