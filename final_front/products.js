async function LoadData(){
    let response = await fetch('/final-products.json')
    let data = await response.json()
    window.products = data
    console.log(data)
}