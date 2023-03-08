import React from 'react'
import { Container, AppBar, Grid, Grow, Typography } from '@material-ui/core';
import logo_img from './images/memory.png'
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import makeStyles from './styles';
const App = () => {
const classes =makeStyles();

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
                <img className={classes.image} src={logo_img} height='60px' alt='app logo' />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify-content='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;