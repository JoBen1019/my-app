import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import { Autocomplete, TextField, Button, Grid, Alert } from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Grid item>
              <TextField>aw</TextField>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <Button variant="contained">確認</Button>
              <Button color="error" variant="contained">
                取消
              </Button>
              <img src="https://www.nextbank.com.tw/images/paradise/img-paradise_depoit.gif"></img>
            </Grid>
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default App;
