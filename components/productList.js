import React from "react";
import { Typography, Divider, Paper, Card, Box, CardContent, CardMedia } from "@mui/material";

export default function ProductionList(props) {

    return (
        <>
            <Typography sx={{ fontSize: 34, fontWeight: 800 }} gutterBottom>
                Edvora
            </Typography>
            <Typography sx={{ fontSize: 25, fontWeight: 600 }} color="text.secondary" gutterBottom>
                Products
            </Typography>
            {props.details.length && props.details.map((i, index) => (
                <React.Fragment key={index}>
                    <Typography sx={{ fontSize: 20, fontWeight: 400, mt: 2 }} gutterBottom>
                        {i[0].product_name}
                    </Typography>
                    <Divider />
                    <Paper elevation={0} sx={{ p: 2, borderRadius: 2, mt: 2, display: 'flex', flexWrap: 'nowrap', overflow: 'scroll' }}>
                        {i.map((j, ind) => (
                            <Card sx={{ p: 1, m: 1, overflow: 'unset' }} key={ind}>
                                <Box sx={{ display: 'flex' }}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', width: 120 }}>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: 70, height: 70, borderRadius: 2 }}
                                            image={j.image}
                                            alt="Live from space album cover"
                                        />

                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <CardContent sx={{ width: 100, display: 'flex', flexDirection: 'column', alignItems: 'space-around', p: 0 }}>
                                            <Typography sx={{ fontSize: 15 }}>
                                                {j.product_name}
                                            </Typography>
                                            <Typography color="text.secondary" sx={{ fontSize: 12 }}>
                                                {j.brand_name}
                                            </Typography>
                                            <Typography sx={{ fontSize: 12 }}>
                                                $ {j.price}
                                            </Typography>

                                        </CardContent>
                                    </Box>
                                    
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Typography color="text.secondary" sx={{ fontSize: 12, width: 100 }}>
                                            {j.address.state}
                                        </Typography>
                                        <Typography color="text.secondary" sx={{ fontSize: 12 }}>
                                            Date: {j.date.slice(0, 10)}
                                        </Typography>
                                    </Box>
                                <Typography color="text.secondary" sx={{ fontSize: 12 }}>
                                    {j.discription}
                                </Typography>
                            </Card>
                        ))}

                    </Paper>
                </React.Fragment>
            ))}
        </>
    )
}