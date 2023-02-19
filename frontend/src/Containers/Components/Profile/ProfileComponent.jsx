import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PersonIcon from "@mui/icons-material/Person";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UserData from "./UserData";
import PasswordComponent from "./PasswordComponent";
import { getAllRoles } from "../../../redux/reducers/staticData";

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
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProfileComponent = () => {
  const [value, setValue] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const tabValue = searchParams.get("title");
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  const allRoles = useSelector((state) => state.staticData.roles);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRoles());
  }, [dispatch]);

  React.useEffect(() => {
    if (tabValue === "") {
      setValue(0);
    }
    if (tabValue === "personale_data") {
      setValue(0);
    }
    if (tabValue === "change_password") {
      setValue(1);
    }
  }, [tabValue]);
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            mb: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tabs
            value={value}
            aria-label={"basic tabs example"}
            sx={{
              display: "flex",
              textDecoration: "none",
              "& .MuiTabs-flexContainer": {
                flexWrap: "wrap",
              },
            }}
          >
            <Tab
              onClick={() => setSearchParams({ title: "personale_data" })}
              icon={<PersonIcon />}
              iconPosition="start"
              label="Personal Data"
              xs={6}
              sx={{
                fontSize: "13px",
                "&.MuiTab-root": {
                  textTransform: "none",
                },
              }}
              {...a11yProps(0)}
            />

            <Tab
              onClick={() => setSearchParams({ title: "change_password" })}
              icon={<VpnKeyIcon />}
              iconPosition="start"
              label="Password"
              xs={6}
              sx={{
                fontSize: "13px",
                "&.MuiTab-root": {
                  textTransform: "none",
                },
              }}
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {allRoles && <UserData loggedUser={loggedUser} allRoles={allRoles} />}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PasswordComponent loggedUser={loggedUser} />
        </TabPanel>
      </Box>
    </div>
  );
};

export default ProfileComponent;
