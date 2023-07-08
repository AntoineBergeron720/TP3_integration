import { Grid, TextField, FormControl, InputLabel, MenuItem } from "@mui/material";
import MyButtonCancel from "../../atoms/button/my-button-cancel";
import MyButtonSave from "../../atoms/button/my-button-save";
import { useState, useEffect } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export function MyFormCreateProduct() {

    const [categoryList, setCategoryList] = useState<any[]>([])

    useEffect(() => {
        let response = [{ _id: '1', name: 'cat 1' }, { _id: '2', name: 'cat 2' }] // TODO : REQUÊTE À L'API
        // TODO : Validation code response, si 200 -> setCategoryList avec liste retourné par l'API, si erreur, toast.erreur
        setCategoryList(response)
    }, [])

    const [category, setCategory] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
    };

    useEffect(() => {
        console.log(category)
    }, [category])

    return (
        <Grid container rowGap={3} columnGap={2}>
            <Grid item xs={12}>
                <TextField
                    id="titre"
                    label="Titre"
                    variant="outlined"
                    fullWidth
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
                <MyButtonCancel />
                <MyButtonSave />
            </Grid>
        </Grid>
    );
}

interface MyFormUpdateProductProps {
    titre: string,
    description: string,
    prix: string,
    category: string
}

export function MyFormUpdateProduct(props: MyFormUpdateProductProps) {
    const [categoryList, setCategoryList] = useState<any[]>([])

    useEffect(() => {
        let response = [{ _id: '1', name: 'cat 1' }, { _id: '2', name: 'cat 2' }] // TODO : REQUÊTE À L'API
        // TODO : Validation code response, si 200 -> setCategoryList avec liste retourné par l'API, si erreur, toast.erreur
        setCategoryList(response)
    }, [])

    const [category, setCategory] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
    };

    useEffect(() => {
        console.log(category)
    }, [category])

    return (
        <Grid container rowGap={3} columnGap={2}>
            <Grid item xs={12}>
                <TextField
                    id="titre"
                    label="Nouveau titre"
                    value={props.titre}
                    variant="outlined"
                    fullWidth
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
                    value={props.description}
                    variant="outlined"
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
                    label="Nouveau prix"
                    value={props.prix}
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
                        value={props.category}
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
                <MyButtonCancel />
                <MyButtonSave />
            </Grid>
        </Grid>
    );
}
