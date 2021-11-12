import './App.css';
import React from "react";
import Button from '@material-ui/core/button';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";

import {makeStyles, ThemeProvider, createTheme} from "@material-ui/core/styles";
import {deepOrange, deepPurple} from "@material-ui/core/colors";
import 'fontsource-roboto';

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/Menu";


const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #333, #000)',
        border: 0,
        marginBottom: 15,
        borderRadius: 15,
        color: 'white',
        padding: '5px 30px'
    }
})

const theme = createTheme({
    typography: {
        h3: {
            fontSize: 36,
            marginBottom: 15,
        }
    }
    // palette: {
    //     primary: {
    //         main: deepOrange[500]
    //     },
    //     secondary: {
    //         main: deepPurple[500]
    //     }
    // }
})

function ButtonStyled() {
    const classes = useStyles();
    return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample() {
    const [checked, setChecked] = React.useState(true)
    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked = {checked}
                    icon = {<DeleteIcon />}
                    checkedIcon={<SaveIcon />}
                    onChange={(e) => setChecked(e.target.checked)}
                    primary="primary"
                    inputProps={{
                        'aria-label' : 'secondary checkbox'
                    }}
                />}
            label="Testing Checkbox"
        />
    )
}


function App() {
  return (
      <ThemeProvider theme={theme}>
          <Container maxWidth="xs">
              <div className="App">
                  <header className="App-header">
                      <AppBar color="secondary">
                          <Toolbar>
                              <IconButton>
                                  <MenuIcon/>
                              </IconButton>
                              <Typography variant="h6">
                                  Material Ui Themeing
                              </Typography>
                              <Button>
                                  Login
                              </Button>
                          </Toolbar>
                      </AppBar>
                      <Typography variant="h3" component="div">
                          Welcome to Material Ui
                      </Typography>
                      <Typography variant="subtitle1">
                          Material Ui Practice
                      </Typography>
                      <ButtonStyled />

                      <Grid container spacing={3} justify="center">
                          <Grid item xs={3} sm={6}>
                              <Paper style={{height: 75, width: '100%', }}/>
                          </Grid>
                          <Grid item xs={3} sm={6}>
                              <Paper style={{height: 75, width: '100%', }}/>
                          </Grid>
                          <Grid item xs={3} sm={6} lg={12}>
                              <Paper style={{height: 75, width: '100%', }}/>
                          </Grid>
                      </Grid>


                      <TextField
                          variant="filled"
                          color="secondary"
                          type="time"
                          label="The Time"
                      />
                      <CheckboxExample />
                      <ButtonGroup variant="contained" color="primary">
                          <Button
                              endIcon={<SaveIcon />}
                              style={{
                                  fontSize: 5
                              }}
                              color="primary">
                              Save
                          </Button>
                          <Button
                              endIcon={<DeleteIcon />}
                              style={{
                                  fontSize: 5
                              }}
                              variant="contained"
                              color="secondary">
                              Discard
                          </Button>
                      </ButtonGroup>
                  </header>
              </div>
          </Container>
      </ThemeProvider>

  );
}

export default App;
