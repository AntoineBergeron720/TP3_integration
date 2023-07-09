"use client"

const url_base = "https://api-tp3-integration.onrender.com"

export async function getData(url:string){
    return fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return response.json()
    })
    .then(data => data)
    .catch(error => { 
        throw error
    });
}

export async function deleteData(url: string) {
    return fetch(url, {
        method: "DELETE",
    }).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return response.json()
    })
    .then(data => data)
    .catch(error => { 
        throw error 
    });
}

export async function getCategories(){
    return getData(url_base + "/categories")
    .then((data) => data)
    .catch((error) => {
        throw error;
    });   
}

export async function deleteCategory(id: string){
    return deleteData(url_base + "/categories/" + id)
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

export async function getProductById(id: string){
    return getData(url_base + "/products/"+ id)
    .then((data) => data)
    .catch((error) => {
        throw error;
    });
}

export async function deleteProduct(id: string){
    return deleteData(url_base + "/products/" + id)
    .then((data) => data)
    .catch((error) => {
        throw error;
    });
}