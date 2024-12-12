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
  const cards = [
    "https://i.pinimg.com/736x/8b/ba/33/8bba33a9026af9798fec727069b5effd.jpg",
    "https://i.pinimg.com/236x/7a/73/e1/7a73e16b4ecf38df0a42c0570b20d337.jpg",
    "https://i.pinimg.com/236x/b9/20/df/b920df45fe76a77360284c79ef42e032.jpg",
    "https://i.pinimg.com/236x/c4/96/a5/c496a5f4215f0f0e18a9a785a4b2cb58.jpg",
    "https://i.pinimg.com/236x/ac/50/52/ac505248bf5ca92f520ea1fbc1fc6e23.jpg",
    "https://i.pinimg.com/236x/a6/6d/b5/a66db5becb373c7ac50e0c11e4d3b386.jpg",
    "https://i.pinimg.com/236x/19/ad/66/19ad662a592ad25aa18183dc9935957b.jpg",
    "https://i.pinimg.com/236x/21/ed/92/21ed9290d7eb95256b1984d74d524c85.jpg",
    "https://i.pinimg.com/236x/fd/1a/e5/fd1ae580cd838da86bab537bfb110a08.jpg",
  ];
  const viewButton = (click) => {
    window.location = click;
  };
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
                      image={card}
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
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => viewButton(card)}>
                        View
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
