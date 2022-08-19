function loadJSONproducts(){
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        for(var q=0; q<data.length; q++){
            document.getElementById("products").innerHTML += data[q].name +" :" +data[q].category
        }
        console.log(data)
        document.querySelector("#fruList").innerText = data.category = "fruits"
        // document.querySelector("#fruList").innerText = data
        document.querySelector("#vegList").innerText = data
    })
   fetchProducts();





