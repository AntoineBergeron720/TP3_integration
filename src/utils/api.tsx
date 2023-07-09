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


export async function postData(url: string, data: any) {
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
   
  return res.json();
}

export async function getCategories(){
    return getData(url_base + "/categories")
    .then((data) => data)
    .catch((error) => {
        throw error;
    });   
}

export async function createCategory(data: any){
    postData(url_base + "/categories/", data)
      .then((result) => {
        setMessage("")
        toast.success('Catégorie ajoutée!')
        if(categoryNameRef && categoryNameRef.current){
          categoryNameRef.current.value = ""
          router.push('/category')
        }

      })
      .catch((error) => {
        console.error(error);
        setMessage("Error");
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
