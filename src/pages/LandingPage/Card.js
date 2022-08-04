import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { InputLabel, OutlinedInput, Stack, Button, Grid } from "@mui/material";

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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="ONE WAY" {...a11yProps(0)} />
          <Tab label="ROUND TRIP" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel sx={{ bgcolor: "red" }} value={value} index={0}>
        <Stack spacing={1}>
          <Stack>
            <InputLabel htmlFor="pickup">Pickup from:</InputLabel>
            <OutlinedInput id="pickup" placeholder="Current Location" />
          </Stack>
          <Stack>
            <InputLabel htmlFor="pickup">Drop Location</InputLabel>
            <OutlinedInput id="pickup" placeholder="Select Destination" />
          </Stack>
          <Stack>
            <InputLabel htmlFor="pickup">Travel Date</InputLabel>
            <OutlinedInput type="date" id="pickup" />
          </Stack>
          <Button variant="contained">Search Cabs</Button>
        </Stack>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Stack spacing={1}>
          <Stack>
            <InputLabel htmlFor="pickup">Pickup from:</InputLabel>
            <OutlinedInput id="pickup" placeholder="Current Location" />
          </Stack>
          <Stack>
            <InputLabel htmlFor="pickup">Drop Location</InputLabel>
            <OutlinedInput id="pickup" placeholder="Select Destination" />
          </Stack>
          <Grid justifyContent={"space-between"} container>
            <Grid item xs={5.5}>
              <Stack>
                <InputLabel htmlFor="pickup">Travel Date</InputLabel>
                <OutlinedInput type="date" id="pickup" />
              </Stack>
            </Grid>
            <Grid item xs={5.5}>
              <Stack>
                <InputLabel htmlFor="pickup">Return Date</InputLabel>
                <OutlinedInput type="date" id="pickup" />
              </Stack>
            </Grid>
          </Grid>
          <Button variant="contained">Search Cabs</Button>
        </Stack>
      </TabPanel>
    </Box>
  );
}
