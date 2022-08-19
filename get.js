// fetch API
var greenkiosk= async () => {
  try {
     const fruits= await fetch("https://jsonplaceholder.typicode.com/Products");
     if (fruits.ok) { // check for the 404 errors
         throw new Error(fruits.status);
     }
     const json_data = await fruits.json();
        console.log(json_data);
     }
     catch (error) { // catch block for network errors
          console.log(error); 
      }
}
fetchProducts();





