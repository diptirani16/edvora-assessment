import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, CardActions, Button, Divider } from "@mui/material";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function Sidebar() {
    const [products, setProducts] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [result, setResult] = useState([]);

    useEffect(() => {
        fetch('https://assessment-edvora.herokuapp.com')
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setResult(data);
            })
    }, [])

    return (
        <>
            <Card sx={{ p: 2, m: 2, borderRadius: 3 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                        Filters
                    </Typography>
                    <Divider variant="middle"/>
                    <FormControl fullWidth sx={{ mt: 4, backgroundColor: "#232323" }}>
                        <InputLabel id="demo-simple-select-label">Products</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={products} label="Product" onChange={(e) => setProducts(e.target.value)} size="small"  >
                            {result.map(i => (
                                <MenuItem value={i.product_name}>{i.product_name}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ mt: 2, backgroundColor: "#232323" }}>
                        <InputLabel id="demo-simple-select-label">State</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={state} label="State" onChange={(e) => setState(e.target.value)} size="small"  >
                            {result.map(i => (
                                <MenuItem value={i.address.state}>{i.address.state}</MenuItem>
                            ))}

                        </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ mt: 2, backgroundColor: "#232323" }}>
                        <InputLabel id="demo-simple-select-label">City</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={city} label="City" onChange={(e) => setCity(e.target.value)} size="small"  >
                            {result.map(i => (
                                <MenuItem value={i.address.city}>{i.address.city}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </CardContent>
            </Card>
        </>
    )
}