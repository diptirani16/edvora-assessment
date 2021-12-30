import React from "react";
import { Card, CardContent, Typography, Divider, Autocomplete, TextField } from "@mui/material";

export default function Sidebar(props) {

    return (
        <>
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
                            onChange={props.handleProduct}
                            options={props.details.length && [...new Set(props.details.map(r => r[0].product_name))]}
                            sx={{ mt: 4, backgroundColor: "#232323" }} 
                            renderInput={(params) => <TextField {...params} label="Product" />} />
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            size="small"
                            onChange={props.handleProduct}
                            options={props.details.length && [...new Set(props.details.map(r => r[0].address.state))]}
                            sx={{ mt: 2, backgroundColor: "#232323" }} 
                            renderInput={(params) => <TextField {...params} label="State" />} />
                    <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            size="small"
                            onChange={props.handleProduct}
                            options={props.detailsState.length && [...new Set(props.detailsState.map(r => r[0].address.city))]}
                            sx={{ mt: 2, backgroundColor: "#232323" }} 
                            renderInput={(params) => <TextField {...params} label="City" />} />
                </CardContent>
            </Card>
        </>
    )
}