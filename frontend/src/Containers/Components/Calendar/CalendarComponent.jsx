import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllReasons } from "../../../redux/reducers/staticData";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useSearchParams } from "react-router-dom";
import {
  getUserAbsences,
  getAllAbsences,
} from "../../../redux/reducers/absence";
import MyAbsencesComponent from "./MyAbsencesComponent";
import { a11yProps, TabPanel } from "../../Utils/MuiUtils";
import CreateAbsenceComponent from "./CreateAbsenceComponent";

const CalendarComponent = () => {
  const user = JSON.parse(localStorage.getItem("loggedUser"));
  const userId = user.id;
  const userRole = user.role_id;
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const tabValue = searchParams.get("title");

  useEffect(() => {
    dispatch(getAllReasons());
    if (userId && userRole === 1) {
      dispatch(getAllAbsences());
    }
    dispatch(getUserAbsences(userId));
  }, [dispatch, userId, userRole]);

  useEffect(() => {
    if (tabValue === "") {
      setValue(0);
    }
    if (tabValue === "allAbsences") {
      setValue(0);
    }
    if (tabValue === "absences" || userRole !== 1) {
      setValue(1);
    }
  }, [tabValue, userRole]);

  const absenceList = useSelector((state) => state.absence.absencesList);
  const allAbsences = useSelector((state) => state.absence.allAbsences);

  return (
    <div>
      <Box>
        <Grid sx={{ width: "90%", m: "0 auto" }} container spacing={2}>
          {/* <div style={{ width: "100%" }}>
            <div className="container">
              <p className="typed">Manage your days here.</p>
            </div>
          </div> */}
          <CreateAbsenceComponent />
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
                {userRole === 1 && (
                  <Tab
                    onClick={() => setSearchParams({ title: "allAbsences" })}
                    //icon={<PersonIcon />}
                    iconPosition="start"
                    label="All Absences"
                    xs={6}
                    sx={{
                      fontSize: "13px",
                      "&.MuiTab-root": {
                        textTransform: "none",
                      },
                    }}
                    {...a11yProps(0)}
                  />
                )}

                <Tab
                  onClick={() => setSearchParams({ title: "absences" })}
                  //icon={<VpnKeyIcon />}
                  iconPosition="start"
                  label="Your Absences"
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
            {userRole === 1 && allAbsences && allAbsences.length > 0 && (
              <TabPanel value={value} index={0}>
                <MyAbsencesComponent absenceList={allAbsences} />
              </TabPanel>
            )}
            {absenceList && absenceList.length > 0 && (
              <TabPanel value={value} index={1}>
                <MyAbsencesComponent absenceList={absenceList} />
              </TabPanel>
            )}
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default CalendarComponent;
