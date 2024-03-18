import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import GenericImage from '../images/generic-person.png';
import BackgroundImage from '../images/mbr_backgroud.jpeg';
import CompanyLogoImage from '../images/mbr_company_logo.png'
import {Container} from "@mui/material";

function ProfileComponent() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>  {/* 40% width for the first section */}
                <Box p={2} display="flex" alignItems="center">
                    <img src={GenericImage} alt="Large Image" style={{ width: 200, height: 200, marginRight: 20 }} />
                </Box>
            </Grid>
            <Grid item xs={5}>
                <Box p={2} display="flex" alignItems="center">
                    <Typography variant="h5" sx={{pt: 10}}>
                        Good morning, Henry<br/>
                        Member ID: 10012938476<br/>
                        Sierra Construction Company, Inc<br/>
                        Owner
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={4}>
                <Box sx={{ pt: 10 }} display="flex" alignItems="center">
                    <img src={CompanyLogoImage} alt="Company Logo"  />
                </Box>
            </Grid>
        </Grid>
    );
}

export default ProfileComponent;
