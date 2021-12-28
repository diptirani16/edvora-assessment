import React from "react";
import { Container, Grid } from "@mui/material";
import Sidebar from "../components/sidebar";

export default function App() {
  return (
      <Container maxwidth="sm">
        <Grid container justifyContent="space-between">
          <Grid item lg={3} sm={4}>
            <Sidebar />
          </Grid>
          <Grid item lg={6} sm={7}>
            Hello!!
          </Grid>
        </Grid>
      </Container>
  )
}

