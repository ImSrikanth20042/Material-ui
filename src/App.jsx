import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CssBaseline,
  Container,
  CardMedia,
  Grid,
  Toolbar,
  Button,
  CardContent,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./styles";
const App = () => {
  const classes = useStyles();
  const theme = createTheme();
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <PhotoCamera className={classes.icon} />
            <Typography variant="h6" justifySelf="center">
              Photo Album
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <div className={classes.container}>
            <Container maxWidth="sm">
              <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                style={{ marginTop: "100px" }}
                gutterBottom>
                Photo Album
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph>
                Hello everyone this app is built to learn MUI and MUI Icons by
                watching YouTube from JavaScript Mastery channel's demonstration
              </Typography>
              <div className={classes.button}>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      See my photos
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Secondary action
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} color="primary">
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} md={4} sm={6}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="https://i.pinimg.com/736x/7a/73/e1/7a73e16b4ecf38df0a42c0570b20d337.jpg"
                      title="Lovely Otters"
                    />
                    <CardContent className={classes.CardContent}>
                      <Typography gutterBottom variant="h5">
                        Media Card with pictures
                      </Typography>
                      <Typography gutterBottom paragraph>
                        Media Card with pictures where you can add your pictures
                        and describe your content in the card content section
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        View
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            Material UI
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            align="center"
            gutterBottom>
            This application is built by using Typography, AppBar, Card,
            CardActions, CssBaseline, Container, CardMedia, Grid, Toolbar,
            Button, CardContent. And created themes and css with ThemeProvider,
            createTheme, makeStyles from material-u/styles
          </Typography>
        </footer>
      </ThemeProvider>
    </>
  );
};

export default App;
