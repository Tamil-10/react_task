import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import { logout } from "../../store/user/action";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Header = ({ isAuthenticated }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const onClickLogout = () => {
    dispatch(logout());
    history.push("/login");
  };

  return (
    <React.Fragment>
      <AppBar color={"primary"}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            React App
          </Typography>
          {isAuthenticated && (
            <Button
              color='secondary'
              variant='contained'
              onClick={onClickLogout}
            >
              Log Out
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
};

export default Header;
