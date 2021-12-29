import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, CardActions, Button, Divider } from "@mui/material";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { productGrouping } from "../utils/productGrouping";

export default function Sidebar(props) {
    const [products, setProducts] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    
    return (
        <>
            <Card sx={{ p: 2, m: 2, borderRadius: 3 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                        Filters
                    </Typography>
                    <Divider variant="middle"/>
                    <FormControl fullWidth sx={{ mt: 4, backgroundColor: "#232323" }}>
                        <InputLabel id="demo-simple-select-label">Products</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={products} label="Product" onChange={(e) => setProducts(e.target.value)} size="small"  >
                            {props.details.length && [...new Set(props.details.map(r => r[0].product_name))].map(i => (
                                <MenuItem value={i}>{i}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ mt: 2, backgroundColor: "#232323" }}>
                        <InputLabel id="demo-simple-select-label">State</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={state} label="State" onChange={(e) => setState(e.target.value)} size="small"  >
                            {props.details.length && [...new Set(props.details.map(r => r[0].address.state))].map(i => (
                                <MenuItem value={i}>{i}</MenuItem>
                            ))}

                        </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ mt: 2, backgroundColor: "#232323" }}>
                        <InputLabel id="demo-simple-select-label">City</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={city} label="City" onChange={(e) => setCity(e.target.value)} size="small"  >
                            {props.details.length && [...new Set(props.details.map(r => r[0].address.city))].map(i => (
                                <MenuItem value={i}>{i}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </CardContent>
            </Card>
        </>
    )
}