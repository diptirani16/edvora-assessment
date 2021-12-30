import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Sidebar from "../components/sidebar";
import ProductionList from "../components/productList";
import { productGrouping } from "../utils/productGrouping";

export default function App() {
  const [productList, setProductList] = useState([])
  const [stateList, setStateList] = useState([])
  const [cityList, setCityList] = useState([])
  const [products, setProducts] = useState([])
  const [filterProducts, setFilterProducts] = useState([])
  const [product, setProduct] = useState()
  const [state, setState] = useState()
  const [city, setCity] = useState()

  useEffect(() => {
    fetch('https://assessment-edvora.herokuapp.com')
      .then(res => res.json())
      .then(res => {
        const groupedProduct = productGrouping([...res])
        setProducts([...groupedProduct])
        setFilterProducts([...groupedProduct])
        setProductList([...new Set(res.map(r => r.product_name))])
        setStateList([...new Set(res.map(r => r.address.state))])
        setCityList([...new Set(res.map(r => r.address.city))])
      })
  }, [])

  const handleChange = (pro, sta, cit) => {
    let filteredProduct = [...products].flatMap(x => x)
    filteredProduct = !!pro ? filteredProduct.filter(p => p.product_name === pro) : filteredProduct
    filteredProduct = !!sta ? filteredProduct.filter(p => p.address.state === sta) : filteredProduct
    filteredProduct = !!cit ? filteredProduct.filter(p => p.address.city === cit) : filteredProduct
    setFilterProducts([...productGrouping(filteredProduct)])
  }

  return (
    <Grid container justifyContent="space-between">
      <Grid item lg={3} md={5} xs={12}>
        <Sidebar
          productList={productList}
          stateList={stateList}
          cityList={cityList}
          setProduct={(p) => {
            setProduct(p)
            setStateList([...new Set(!!p ? [...products].flatMap(x => x).filter(r => r.product_name === p).map(r => r.address.state) : [...products].flatMap(x => x).map(r => r.address.state))])
            setCityList([...new Set(!!p ? [...products].flatMap(x => x).filter(r => r.product_name === p).map(r => r.address.city): [...products].flatMap(x => x).map(r => r.address.city))])
            handleChange(p, state, city)
          }}
          setState={(s) => {
            setState(s)
            setCityList([...new Set(!!product ? !!s ? [...products].flatMap(x => x).filter(r => r.product_name === product && r.address.state === s).map(r => r.address.city) : [...products].flatMap(x => x).filter(r => r.product_name === product).map(r => r.address.city) : !!s ? [...products].flatMap(x => x).filter(r => r.address.state === s).map(r => r.address.city) : [...products].flatMap(x => x).map(r => r.address.city))])
            handleChange(product, s, city)
          }}
          setCity={(c) => {
            setCity(c)
            handleChange(product, state, c)
          }}
        />
      </Grid>
      <Grid item lg={9} md={7} xs={12}>
        <ProductionList products={[...filterProducts]} />
      </Grid>
    </Grid>
  )
}

