import React, { useEffect, useState } from "react";
import { Typography, Divider, Paper, Card, Box, CardContent, CardMedia } from "@mui/material";
import { productGrouping } from "../utils/productGrouping";

export default function ProductionList(props) {
    
    return (
        <>
            <Typography sx={{ fontSize: 34, fontWeight: 800 }} gutterBottom>
                Edvora
            </Typography>
            <Typography sx={{ fontSize: 25, fontWeight: 600 }} color="text.secondary" gutterBottom>
                Products
            </Typography>
            {props.details.length && props.details.map(i => (
                <>
                    <Typography sx={{ fontSize: 20, fontWeight: 400, mt: 2 }} gutterBottom>
                        {i[0].product_name}
                    </Typography>
                    <Divider />
                    <Paper elevation={0} sx={{ p: 2, borderRadius: 2, mt: 2, display: 'flex', flexWrap: 'nowrap', overflow: 'scroll' }}>
                        {i.map(j => (
                            <Card sx={{ display: 'flex', p: 1, m:1, overflow: 'unset' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardMedia
                                        component="img"
                                        sx={{ width: 70, height: 70, borderRadius: 2 }}
                                        image={j.image}
                                        alt="Live from space album cover"
                                    />
                                    <Typography color="text.secondary" sx={{ fontSize: 12 }}>
                                        {j.address.state}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardContent sx={{ flex: '1 0 auto' }}>
                                        <Typography sx={{ fontSize: 15 }}>
                                            {j.product_name}
                                        </Typography>
                                        <Typography color="text.secondary" sx={{ fontSize: 12 }}>
                                            {j.brand_name}
                                        </Typography>
                                        <Typography sx={{ fontSize: 12 }}>
                                            $ {j.price}
                                        </Typography>
                                        <Typography color="text.secondary" sx={{ fontSize: 12 }}>
                                            Date: {j.date.slice(0, 10)}
                                        </Typography>
                                    </CardContent>
                                    {/* <Box sx={{ display: 'flex', pl: 1, pb: 1 }}> */}
                                    <Typography color="text.secondary" sx={{ fontSize: 12 }}>
                                        {j.discription}
                                    </Typography>

                                    {/* </Box> */}
                                </Box>
                            </Card>
                        ))}

                    </Paper>
                </>
            ))}
        </>
    )
}