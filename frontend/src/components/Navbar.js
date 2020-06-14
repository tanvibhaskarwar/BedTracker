import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Toolbar } from "@material-ui/core";
import HospDisp from "./HospDisp";
import Login from "./login.component";
import SignUp from "./signup.component";
import HomePage from "./HomePage";
import TestingCentreDisplay from "./TestingCentresDisp";
import QuarantineDisp from "./QuarantineDisp";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    //flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <body>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Tabs value={value} onChange={handleChange}>
              <Tab label="HomePage" {...a11yProps(0)} />
              <Tab label="Sign Up" {...a11yProps(1)} />
              <Tab label="Login" {...a11yProps(2)} />
              <Tab label="Hospitals" {...a11yProps(3)} />
              <Tab label="Testing Centres" {...a11yProps(4)} />
              <Tab label="Quarantine Facilities" {...a11yProps(5)} />
            </Tabs>
          </Toolbar>
        </AppBar>
        <TabPanel value={value} index={2}>
          <Login />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SignUp />
        </TabPanel>
        <TabPanel value={value} index={0}>
          <HomePage />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <HospDisp />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <TestingCentreDisplay />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <QuarantineDisp />
        </TabPanel>
      </div>
    </body>
  );
}
