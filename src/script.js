// Tom array för att lagra produkter i varukorgen
const cart = []


const productInput = document.getElementById("productInput")
const priceInput = document.getElementById("priceInput")
const addButton = document.getElementById("addButton")
const cartList = document.getElementById("cartList")


function addToCart()
{
    const productName = productInput.value.trim()
    const price = parseFloat(priceInput.value)

    
    // Ser till att produktnamn inte är tomt och att priset är ett positivt tal
    if(productName === "" || isNaN(price) || price <= 0)
    {
        alert("Fyll i ett giltigt produktnamn och pris")
        return
    }

    
    // Kontrollerar om produkten redan finns i varukorgen
    const existingProduct = cart.find(item => item.productName === productName)
    
    
    if(existingProduct)
    {
         existingProduct.quantity += 1
    
    } else{
        cart.push({
            productName: productName,
            price: price,
            quantity: 1
        })
    }


    // Tömmer input-fälten efter att en produkt har lagts till
    productInput.value = ""
    priceInput.value = ""

   
    renderCart() // Uppdaterar visningen av varukorgen
}


function renderCart()
{
    cartList.innerHTML = "" // Rensar tidigare lista för att undvika duplicering

    
    cart.forEach(item => {
        const li = document.createElement("li")
        li.textContent = `${item.productName} - ${item.price}kr (x${item.quantity})`
        cartList.appendChild(li) // Lägger till list-elementet i listan
    })
}


addButton.addEventListener("click", addToCart) // Lägger till en "click"-eventlyssnare på knappen

 