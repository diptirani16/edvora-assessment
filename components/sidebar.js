import React from "react";
import { Card, CardContent, Typography, Divider, Autocomplete, TextField } from "@mui/material";

export default function Sidebar(props) {

    return (
        <React.Fragment>
            <Card sx={{ p: 2, m: 2, borderRadius: 3 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                        Filters
                    </Typography>
                    <Divider variant="middle" />
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            size="small"
                            onChange={(_, value) => props.setProduct(value)}
                            options={props.productList}
                            sx={{ mt: 4, backgroundColor: "#232323" }} 
                            renderInput={(params) => <TextField {...params} label="Product" />} />
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            size="small"
                            onChange={(_, value) => props.setState(value)}
                            options={props.stateList}
                            sx={{ mt: 2, backgroundColor: "#232323" }} 
                            renderInput={(params) => <TextField {...params} label="State" />} />
                    <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            size="small"
                            onChange={(_, value) => props.setCity(value)}
                            options={props.cityList}
                            sx={{ mt: 2, backgroundColor: "#232323" }} 
                            renderInput={(params) => <TextField {...params} label="City" />} />
                </CardContent>
            </Card>
        </React.Fragment>
    )
}