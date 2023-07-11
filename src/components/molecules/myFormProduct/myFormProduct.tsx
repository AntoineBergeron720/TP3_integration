import { Grid, TextField, FormControl, InputLabel, MenuItem, Button } from "@mui/material";
import { useState, useEffect } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { getCategories } from '@/utils/api';
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";

export function MyFormCreateProduct() {
    const t = useTranslations("products");
    const [categoryList, setCategoryList] = useState<any[]>([])

    useEffect(() => {
       
        getCategories().then((data)=> {
            setCategoryList(data.categories) 
        }).catch(() => {
            toast.error(t("loading-failed"));
        })

    }, [])

    const [category, setCategory] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
    };

    return (
        <Grid container rowGap={3} columnGap={2}>
            <Grid item xs={12}>
                <TextField
                    id="titre"
                    label={t("title")}
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
                    label={t("description")}
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
                    label={t("price")}
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
                    <InputLabel id="category">{t("category")}</InputLabel>
                    <Select
                        labelId="category"
                        id="categorySelect"
                        value={category}
                        label={t("category")}
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
                <Button />
                <Button />
            </Grid>
        </Grid>
    );
}

interface MyFormUpdateProductProps {
    titre: string,
    description: string,
    prix: number,
    category: string
}

export function MyFormUpdateProduct(props: MyFormUpdateProductProps) {
    const t = useTranslations("products");
    const [categoryList, setCategoryList] = useState<any[]>([])

    useEffect(() => {

        getCategories().then((data)=> {
            setCategoryList(data.categories) 
        }).catch(() => {
            toast.error(t("loading-failed"));
        })
        
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
                    label={t("title")}
                    defaultValue={props.titre}
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
                    label={t("description")}
                    defaultValue={props.description}
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
                    label={t("price")}
                    defaultValue={props.prix}
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
                    <InputLabel id="category">{t("category")}</InputLabel>
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
                <Button />
                <Button />
            </Grid>
        </Grid>
    );
}
