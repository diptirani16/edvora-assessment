import React, { useEffect,useState } from "react";
import { Grid } from "@mui/material";
import Sidebar from "../components/sidebar";
import ProductionList from "../components/productList";
import { productGrouping } from "../utils/productGrouping";

export default function App() {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch('https://assessment-edvora.herokuapp.com')
            .then(res => res.json())
            .then((data) => {
                const newData = productGrouping(data)
                setDetails(newData);
                // console.log(newData);
            })
  }, [])

  return (
        <Grid container justifyContent="space-between">
          <Grid item lg={3} sm={5} sx={12}>
            <Sidebar details={details} />
          </Grid>
          <Grid item lg={9} sm={7} sx={12}>
            <ProductionList details={details} />
          </Grid>
        </Grid>
  )
}

