import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Daily from '../pages/Daily'
import World from '../pages/World'
import Trends from "../pages/Trends"
import UnitedStates from '../pages/UnitedStates'
function TabPanel(props) {
  const { children, value, index, ...other } = props;
    //main tab panel display 
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
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
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TabsWrappedLabel() {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
          <Tab
            value="one"
            label="Daily"
            wrapped
            {...a11yProps('one')}
          />
          <Tab value="two" label="United States" {...a11yProps('two')} />
          <Tab value="three" label="World" {...a11yProps('three')} />
          <Tab value="four" label="Trends" {...a11yProps('four')} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="one">
  <Daily />
      </TabPanel>
      <TabPanel value={value} index="two">
     <World />
      </TabPanel>
      <TabPanel value={value} index="three">
    <UnitedStates />
      </TabPanel>
      <TabPanel value={value} index="four">
        <Trends />
      </TabPanel>
    </div>
  );
}