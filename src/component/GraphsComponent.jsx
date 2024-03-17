import { Container, Grid } from '@mui/material';
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { DataGrid } from '@mui/x-data-grid';
import FinancialImage from "../images/mbr-financials.png"
import Box from "@mui/material/Box";
import React from "react";


function GraphsComponent() {
    return (
        <Container maxWidth="false">  {/* Adjust maxWidth as needed */}
            <Grid container spacing={2} sx={{
                backgroundColor: 'white',
                padding: '2vh',
                }}>  {/* Adjust spacing as needed */}
                <Grid item xs={4}>  {/* 40% width for the first section */}
                    <Grid container direction="column" spacing={2}>  {/* Nested grid for rows */}
                        <Grid item>
                            <Typography variant="h6" align={"center"}>  {/* Adjust variant as needed for title */}
                               Financials
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src={FinancialImage} alt="Financial Image" style={{ width: 300, height: 200}} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2}>  {/* 30% width for each remaining section */}
                    <Grid container direction="column" spacing={2}>  {/* Nested grid for rows */}
                        <Grid item>
                            <Typography variant="h6" align={"center"}>  {/* Adjust variant as needed for title */}
                                Sites
                            </Typography>
                        </Grid>
                        <Grid item>
                            {/* Your graph component or placeholder here */}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                    <Grid container direction="column" spacing={2}>  {/* Nested grid for rows */}
                        <Grid item>
                            <Typography variant="h6" align={"center"}>  {/* Adjust variant as needed for title */}
                                Assets
                            </Typography>
                        </Grid>
                        <Grid item>
                            {/* Your graph component or placeholder here */}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Grid container direction="column" spacing={2}>  {/* Nested grid for rows */}
                        <Grid item>
                            <Typography variant="h6" align={"center"}>  {/* Adjust variant as needed for title */}
                                Alerts & Notifications
                            </Typography>
                        </Grid>
                        <Grid item>
                            {/* Your graph component or placeholder here */}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default GraphsComponent;
