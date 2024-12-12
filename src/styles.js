import { makeStyles } from "@mui/styles";
import { createTheme } from "@mui/material";

const useStyles = makeStyles(() => {
  const theme = createTheme();
  console.log(theme);
  return {
    container: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    button: {
      marginTop: "40px",
    },
    icon: {
      marginRight: "20px",
    },
    cardGrid: {
      padding: "20px 0",
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardMedia: {
      paddingTop: "56.25%",
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: "50px 0",
    },
  };
});

export default useStyles;
