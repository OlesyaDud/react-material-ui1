import React , {useState} from 'react';
import './App.css';

import { AppBar, Container, Toolbar, Button, IconButton, Typography, Card, Box, Paper , Grid, CardMedia, CardContent, CardActions, BottomNavigation, BottomNavigationAction, DialogTitle, DialogContent, DialogContentText} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// import LayerIcon from '@material-ui/icons/LayerIcon';
// import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilledIcon';
import ArrowDropDownCircleRoundedIcon from '@material-ui/icons/ArrowDropDownCircleRounded';
import AlbumRoundedIcon from '@material-ui/icons/AlbumRounded';

import BeachAccessIcon from '@material-ui/icons/BeachAccess';

import CallMadeIcon from '@material-ui/icons/CallMade';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import {makeStyles} from '@material-ui/core/styles';
import CameraIcon from '@material-ui/icons/Camera';

import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  // overlay: {
  //   position: "absolute",
  //   top: 0,
  //   bottom: 0,
  //   right: 0,
  //   left: 0,
  //   backgroundOverlay: "rgba(0,0,0, .3"
  // },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1
  },
  cardGrid: {
    marginTop: theme.spacing(4)
  },
  mainPostContent: {
    position: "relative",
    padding: theme.spacing(20),
    marginTop: theme.spacing(3)
  }
}))

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const classes= useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = ()=> {
    setOpen(true);
  }

  const handleClose = ()=> {
    setOpen(false);
  }

  return (
    <>
    <AppBar position="fixed">
    {/* container centers horizontally */}
      <Container fixed> 
      {/* toolbar -- icons, logos etc */}
        <Toolbar>
          <IconButton edge="start"
          color="inherit" aria-label="menu"
          className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>Cool Website</Typography>
          <Box mr={3}>
            <Button color="inherit" variant="outlined" onClick={handleClickOpen}>Log In</Button>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">
                Log In
              </DialogTitle>
              <DialogContent>
              <DialogContentText>
.                Log in to see more content</DialogContentText>
            
              <TextField 
                autoFocus
                margin="dense"
                id="name"
                label="Email"
                type="email"
                fullWidth
              />
                <TextField 
                autoFocus
                margin="dense"
                id="pass"
                label="Password"
                type="password"
                fullWidth
              />
               </DialogContent>
               <DialogActions>
                 <Button onClick={handleClose} color="primary">
                    Cancel
                 </Button>
                 <Button onClick={handleClose} color="primary">
                    Log In
                 </Button>
               </DialogActions>
            </Dialog>
          </Box>
          <Button color="secondary" variant="contained">Sign Up</Button>
        </Toolbar>
      </Container>
    </AppBar>

    {/* component 2---jumbotron */}
    <main>
      <Paper className={classes.mainFeaturesPost}
      style={{backgroundImage: 'url(https://images.pexels.com/photos/104373/pexels-photo-104373.jpeg'}}
      >

      <Container fixed>

   
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainPostContent}>
              <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
              >
                Hello there, how are you doing?
              </Typography>
              <Typography
              component="h5"
              color="inherit"
              paragraph
              >
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </Typography>
              <Button variant="contained" color="secondary">
                Learn more
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
      </Paper>

      {/* new component */}
      <div className={classes.mainContent}>
        <Container maxWidth="md">
          <Typography variant="h2"
          align="center" 
          color="textPrimary"
          gutterBottom
          >
            Something Else
          </Typography>
          <Typography
              component="h5"
              color="textSecondary"
              paragraph
              >
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </Typography>

              <div className={classes.mainButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button 
                    variant="contained"
                    color="primary"
                    >Start Now</Button>
                  </Grid>
                  <Grid item>
                    <Button 
                    variant="outlined"
                    color="primary"
                    >Learn More</Button>
                  </Grid>
                </Grid>
              </div>
        </Container>
      </div>

{/* small items container */}
      <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
          <CardMedia 
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="Image title"
          />
          <CardContent className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            Blog Post
          </Typography>
          <Typography>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam.
          </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              View
            </Button>
            <Button size="small" color="primary">
              Edit
            </Button>
            <ArrowDropDownCircleRoundedIcon />
            <AlbumRoundedIcon />
          </CardActions>
          </Card>
          </Grid>
        ))}
      </Grid>
      </Container>
    </main>
    {/* footer */}
    <footer mt-5>
      <Typography variant="h6" align="center" gutterBottom>

          <BottomNavigation
          value={value}
          onChange={handleChange}
          className={classes.root}
          >
          <BottomNavigationAction 
            label="SomeText1"
            value="recents"
            icon={<CameraIcon />}
          />
           <BottomNavigationAction 
            label="SomeText2"
            value="favorites"
            icon={<BeachAccessIcon />}
          />
           <BottomNavigationAction 
            label="SomeText3"
            value="nearby"
            icon={<CallMadeIcon />}
          />
           <BottomNavigationAction 
            label="SomeText4"
            value="folder"
            icon={<BeenhereIcon />}
          />
          </BottomNavigation>
      </Typography>
    </footer>
    </>
  );
}

export default App;
