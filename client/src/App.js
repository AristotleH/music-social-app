import React from "react";
import "./App.css";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";

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
        <main>
            <div className={styles.root}>
                <Grid
                    container
                    spacing={3}
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={6}>
                        <Paper className={styles.paper} variant="outlined">
                            Logo and About text.
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <List>
                            <Paper className={styles.paper} variant="outlined">
                                Temporary message 1.
                            </Paper>
                            <Paper className={styles.paper} variant="outlined">
                                Temporary message 2.
                            </Paper>
                            <Paper className={styles.paper} variant="outlined">
                                Temporary message 3.
                            </Paper>
                            <Paper className={styles.paper} variant="outlined">
                                Temporary message 4.
                            </Paper>
                            <Paper className={styles.paper} variant="outlined">
                                Temporary message 5.
                            </Paper>
                        </List>
                    </Grid>
                </Grid>
            </div>
        </main>
    );
}

export default App;
