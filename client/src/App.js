import React from "react";
import "./App.css";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: "30px",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
}));

function App() {
    return <Home />;
}

function Home() {
    const styles = useStyles();

    return (
        <Grid container spacing={3} className={styles.root}>
            <Grid item xs={12}>
                <Paper className={styles.paper}>
                    <p>Hello, world!</p>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default App;
