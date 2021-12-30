import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Sidebar from "../components/sidebar";
import ProductionList from "../components/productList";
import { productGrouping, stateGrouping, statesGroup, cityGroup  } from "../utils/grouping";

export default function App() {
  const [products, setProducts] = useState("");
  const [state, setState] = useState("");
  const [details, setDetails] = useState([]);
  const [detailsState, setDetailsState] = useState([]);
  const [city, setCity] = useState("");

  useEffect(() => {
    fetch('https://assessment-edvora.herokuapp.com')
      .then(res => res.json())
      .then((data) => {
        const newData = productGrouping(data)
        const newStateData = stateGrouping(data)
        setDetails(newData);
        setDetailsState(newStateData);
      })
  }, [])

  const handleProduct = (e) => {
    setProducts(e.target.value);
    const newStateList = statesGroup(details, e.target.value);
    console.log(newStateList);
    setDetails(newStateList);
  }

  const handleState = (e) => {
    setState(e.target.value);
    const newCityList = cityGroup(detailsState, e.target.value);
    console.log(newCityList);
    setDetailsState(newCityList);
  }

  const handleCity = (e) => {
    setCity(e.target.value);
  }

  return (
    <Grid container justifyContent="space-between">
      <Grid item lg={3} md={5} xs={12}>
        <Sidebar 
          details={details} 
          detailsState={detailsState}
          products={products} 
          state={state}
          city={city}
          handleProduct={handleProduct} 
          handleState={handleState} 
          handleCity={handleCity} 
        />
      </Grid>
      <Grid item lg={9} md={7} xs={12}>
        <ProductionList details={details} />
      </Grid>
    </Grid>
  )
}

