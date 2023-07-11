import { Grid, TextField, FormControl, InputLabel, MenuItem } from "@mui/material";
import MyButtonCancel from "../../atoms/button/my-button-cancel";
import MyButtonSave from "../../atoms/button/my-button-save";
import { useState, useEffect, useCallback } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { getCategories, createProduct, updateProduct } from '@/utils/api';
import toast from "react-hot-toast";
import {Button} from "@mui/material";
import { useRouter } from "next/navigation";

export function MyFormCreateProduct() {

    const [categoryList, setCategoryList] = useState<any[]>([])

    useEffect(() => {
       
        getCategories().then((data)=> {
            setCategoryList(data.categories) 
        }).catch(() => {
            toast.error("Erreur lors de la récupération des catégories");
        })

    }, [])

    const [category, setCategory] = useState('');
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")

    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
    };

    const [errors, setErrors] = useState<string[]>([])
    const isValid = useCallback(() => {
        let err = []
 
        if(title.trim() == ""){
            err.push("Titre")

        }
        if (description.trim() == ""){
            err.push("Description")
        }        
        if (category.trim() == ""){
            err.push("Catégorie")
        }
        if (isNaN(parseInt(price))){
            err.push("Prix")
           
        }
        if (err.length > 0) {
            setErrors(err)
            return false
        }

        return true;
    }, [title, description, price, category, setErrors])

    const router = useRouter();

    const formSubmit = useCallback(()=> {

        if (isValid()){
            createProduct({title, price, description, categoryId: category})
            .then((res)=> {
                toast.success('Le produit a été ajouté avec succès!')
                router.push('/product')
            }).catch((err) => {
                toast.error('Erreur: Impossible de créer le produit.')
            })
        }
        else {
            //toast.error(`Impossible de créer le produit, vérifier les informations suivantes: ${errors.map((err) => {return err + " "})}`   )
        }
        
    },[title, price, description, category, isValid, router])

    useEffect(()=> {
        if (errors.length > 0) toast.error(`Impossible de créer le produit, vérifier les informations suivantes: ${errors.map((err) => {return err})}`   )
    }, [errors])

    return (
        <Grid container rowGap={3} columnGap={2}>
            <Grid item xs={12}>
                <TextField
                    id="titre"
                    label="Titre"
                    variant="outlined"
                    fullWidth
                    onChange={(e)=> setTitle(e.currentTarget.value)}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                border: "2px solid #007FFF",
                                borderRadius: "2px",
                            },
                        }
                    }}
                />
                <TextField
                    id="description"
                    label="Description"
                    variant="outlined"
                    onChange={(e)=> setDescription(e.currentTarget.value)}
                    multiline
                    minRows={5}
                    fullWidth
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                border: "2px solid #007FFF",
                                borderRadius: "2px",
                            },
                        },
                        mt: 5
                    }}
                />
                <TextField
                    id="prix"
                    label="Prix"
                    variant="outlined"
                    onChange={(e)=> setPrice(e.currentTarget.value)}
                    fullWidth
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                border: "2px solid #007FFF",
                                borderRadius: "2px",
                            },
                        },
                        mt: 5
                    }}
                />
                <FormControl
                    fullWidth
                    sx={
                        {
                            mt: 5,

                            "& fieldset": {
                                border: "2px solid #007FFF"

                            }
                        }
                    }
                >
                    <InputLabel id="category">Catégorie</InputLabel>
                    <Select
                        labelId="category"
                        id="categorySelect"
                        value={category}
                        label="Catégorie"
                        onChange={handleChange}

                    >
                        {
                            categoryList && categoryList.map((cat) => {
                                return <MenuItem key={cat._id} value={cat._id}>{cat.name}</MenuItem>
                            })
                        }

                    </Select>
                </FormControl>
            </Grid>
            <Grid
                item
                xs={12}
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 2,
                }}
            >
         
                <Button onClick={formSubmit} disabled={!title || !description || !price || !category} variant="contained" sx={{ border: "2px solid #007FFF", width: '100%' }} type="submit">
                    Créer
                </Button>
            </Grid>
        </Grid>
    );
}

interface MyFormUpdateProductProps {
    id: string
    titre: string,
    description: string,
    prix: number,
    category: string
}

export function MyFormUpdateProduct(props: MyFormUpdateProductProps) {
    const [categoryList, setCategoryList] = useState<any[]>([])

    useEffect(() => {

        getCategories().then((data)=> {
            setCategoryList(data.categories) 
        }).catch(() => {
            toast.error("Erreur lors de la récupération des catégories");
        })
        
    }, [])

    const [category, setCategory] = useState(props.category);

    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
    };

    const [title, setTitle] = useState(props.titre)
    const [description, setDescription] = useState(props.description)
    const [price, setPrice] = useState(props.prix.toString())

    const [errors, setErrors] = useState<string[]>([])

    const isValid = useCallback(() => {
        let err = []
 
        if(title.trim() == ""){
            err.push("Titre")

        }
        if (description.trim() == ""){
            err.push("Description")
        }        
        if (category.trim() == ""){
            err.push("Catégorie")
        }
        if (isNaN(parseInt(price))){
            err.push("Prix")
        }
        if (err.length > 0) {
            setErrors(err)
            return false
        }

        return true;
    }, [title, description, price, category, setErrors])

    const router = useRouter()

    const formSubmit = useCallback(()=> {

        if (isValid()){
            updateProduct(props.id, {title, price, description, categoryId: category})
            .then((res)=> {
                toast.success('Le produit a été modifié avec succès!')
                router.push('/product')
            }).catch((err) => {
                toast.error('Erreur: Impossible de créer le produit.')
            })
        }
        else {
            //toast.error(`Impossible de créer le produit, vérifier les informations suivantes: ${errors.map((err) => {return err + " "})}`   )
        }
        
    },[title, price, description, category, isValid, props.id, router])

    useEffect(()=> {
        if (errors.length > 0) toast.error(`Impossible de créer le produit, vérifier les informations suivantes: ${errors.map((err) => {return err})}`   )
    }, [errors])

    return (
        <Grid container rowGap={3} columnGap={2}>
            <Grid item xs={12}>
                <TextField
                    id="titre"
                    label="Nouveau titre"
                    defaultValue={props.titre}
                    variant="outlined"
                    fullWidth
                    onChange={e => setTitle(e.currentTarget.value)}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                border: "2px solid #007FFF",
                                borderRadius: "2px",
                            },
                        }
                    }}
                />
                <TextField
                    id="description"
                    label="Nouvelle description"
                    defaultValue={props.description}
                    variant="outlined"
                    multiline
                    minRows={5}
                    fullWidth
                    onChange={e => setDescription(e.currentTarget.value)}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                border: "2px solid #007FFF",
                                borderRadius: "2px",
                            },
                        },
                        mt: 5
                    }}
                />
                <TextField
                    id="prix"
                    label="Nouveau prix"
                    defaultValue={props.prix}
                    onChange={e => setPrice(e.currentTarget.value)}
                    variant="outlined"
                    fullWidth
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                border: "2px solid #007FFF",
                                borderRadius: "2px",
                            },
                        },
                        mt: 5
                    }}
                />
                <FormControl
                    fullWidth
                    sx={
                        {
                            mt: 5,

                            "& fieldset": {
                                border: "2px solid #007FFF"

                            }
                        }
                    }
                >
                    <InputLabel id="category">Catégorie</InputLabel>
                    <Select
                        labelId="category"
                        id="categorySelect"
                        defaultValue={props.category}
                        label="Nouvelle catégorie"
                        onChange={handleChange}
                    >
                        {
                            categoryList && categoryList.map((cat) => {
                                return <MenuItem key={cat._id} value={cat._id}>{cat.name}</MenuItem>
                            })
                        }

                    </Select>
                </FormControl>
            </Grid>
            <Grid
                item
                xs={12}
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 2,
                }}
            >
               
               <Button disabled={!title || !description || !price || !category} onClick={formSubmit} variant="contained" sx={{ border: "2px solid #007FFF", width: '100%' }} type="submit">
                    Enregistrer
                </Button>
            </Grid>
        </Grid>
    );
}
