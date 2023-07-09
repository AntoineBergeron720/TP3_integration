"use client"

const url_base = "https://api-tp3-integration.onrender.com"

export async function getData(url:string){
    return fetch(url)
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log(err))

}

export async function getCategories(){
    return getData(url_base + "/categories")
    .then((data) => data)
    .catch((error) => {
        throw error;
    });
      
}

export async function getProducts(){
    return getData(url_base + "/products")
    .then((data) => data)
    .catch((error) => {
        throw error;
    });
}
