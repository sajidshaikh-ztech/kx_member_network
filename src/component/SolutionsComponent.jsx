import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from "@mui/material/Typography"
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import {Button, Container} from "@mui/material";
import Box from "@mui/material/Box";
import { useNavigate } from 'react-router-dom';
import GenericImage from "../images/generic-person.png";
import CompanyLogoImage from "../images/mbr_company_logo.png";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: 2,
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 2,
    },
    card: {
        display: 'flex',
        marginBottom: 2,
    },
    cardMedia: {
        width: 200,
        height: 200,
        objectFit: 'cover',
    },
    cardContent: {
        flex: 1,
        padding: 2,
    },
}));

const SolutionsComponent = () => {
    const navigate = useNavigate();
    const classes = useStyles();
    const name = ['Filter, Cabin Air Element', 'Cabin Air Filter', 'Air Filter', 'Cabin Air Filter Accessory',
                            'Water Pump Assembly','Starter, Gear Reduction type, 24 Volts 5.5 KW'];
    const images = [
        'https://kacscmpeusprdsacdn.azureedge.net/images/Remote/637963701485293521_smart construction_pleasant prairie wi _ zion il_ds_191029_kom_3099 (1).jpg',
        'https://mykomats-prd-storageaccount.azureedge.net/partsimage/145-Z79-5810-WM.jpg?28032024',
        'https://mykomats-prd-storageaccount.azureedge.net/partsimage/14X-911-7750-WM.jpg?28032024',
        'https://mykomats-prd-storageaccount.azureedge.net/partsimage/22B-979-1730-WM.jpg?28032024',
        'https://mykomats-prd-storageaccount.azureedge.net/partsimage/EN_Engine.png?28032024',
        'https://mykomats-prd-storageaccount.azureedge.net/partsimage/PSTR1028_PL_Starter.png?28032024'
    ];
    const partNumber = ['00840205','145-Z79-5810','14X-911-7750', '22B-979-1730','R600-821-9390','R600-863-5131'];

    const handleSubmit = (e) => {
        console.log('submitting quote');
        e.preventDefault();
        navigate('https://www.komatsu.com/en/request-a-quote/');  // Redirect to RegisteredUserPage after successful login
    };

    return (
        <Container maxWidth="false" sx={{
            paddingBottom:'10vh',
        }}>
           <Grid container spacing={2} >
                <Grid item xs={6}>  {/* 40% width for the first section */}
                    <Box p={2} display="flex" alignItems="center">
                        <img src="https://kacscmpeusprdsacdn.azureedge.net/images/Remote/637963701485293521_smart construction_pleasant prairie wi _ zion il_ds_191029_kom_3099 (1).jpg" style={{ width: 800, height: 275}} />
                    </Box>
                </Grid>
               <Grid item xs={6} sx={{ pl: 20 }}>  {/* Right grid with nested container for rows */}
                   <Grid item xs={12} >  {/* Row 1 - full width on xs */}
                       <Box p={2} display="flex" alignItems="center">
                           <Typography variant="h5" align="center" >
                               Remote
                           </Typography>
                       </Box>
                   </Grid>
                   <Grid item xs={12}>  {/* Row 2 - full width on xs */}
                       <Box p={2} display="flex" alignItems="left">
                           <Typography >
                               Send new design data to the machines, or remotely support your operators, without traveling to the jobsite
                           </Typography>
                       </Box>
                   </Grid>
                   <Grid item xs={12}>  {/* Row 3 - full width on xs */}
                       <Box p={1} display="flex" >
                           <div><b>Key Features</b></div>
                       </Box>
                       <Box p={1} display="flex" >
                           <div>
                               <ul>
                                   <li>
                                       Remotely support operators from the office
                                   </li>
                                   <li>
                                       Send to all machines on site at once
                                   </li>
                                   <li>
                                       Download/Delete design files
                                   </li>
                               </ul>
                           </div>
                       </Box>
                   </Grid>
                   <Grid item xs={12}>
                       <Box p={1} display="flex" >
                           <Button
                               type="button"
                               variant="contained"
                               sx={{ mt: 3, mb: 2 }}
                               onClick={() => window.location.href = 'https://smartconstruction.mykomatsu.komatsu/Products/Detail/1efc18b7-a0f7-4076-89d2-8271743374f2'}
                           >
                               Buy Now
                           </Button>
                       </Box>
                   </Grid>
               </Grid>
            </Grid>
            <Grid container spacing={2} >
                <Grid item xs={6}>  {/* 40% width for the first section */}
                    <Box p={2} display="flex" alignItems="center">
                        <img src="https://kacscmpeusprdsacdn.azureedge.net/images/Dashboard/637716696028254115_smartconstruction_dashboard_cutandfill.png" style={{ width: 800, height: 275}} />
                    </Box>
                </Grid>
                <Grid item xs={6} sx={{ pl: 20 }}>  {/* Right grid with nested container for rows */}
                    <Grid item xs={12} >  {/* Row 1 - full width on xs */}
                        <Box p={2} display="flex" alignItems="center">
                            <Typography variant="h5" align="center" >
                                Dashboard
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>  {/* Row 2 - full width on xs */}
                        <Box p={2} display="flex" alignItems="left">
                            <Typography >
                                Graphically visualize your design, drone, and machine data to measure cut/fills, quantities, and productivity of your job site.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>  {/* Row 3 - full width on xs */}
                        <Box p={1} display="flex" >
                            <div><b>Key Features</b></div>
                        </Box>
                        <Box p={1} display="flex" >
                            <div>
                                <ul>
                                    <li>
                                        Visually track productivity, materials
                                    </li>
                                    <li>
                                        Measure and make decisions quickly
                                    </li>
                                    <li>
                                        Confirm quantities moved
                                    </li>
                                </ul>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box p={1} display="flex" >
                            <Button
                                type="button"
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={() => window.location.href = 'https://smartconstruction.mykomatsu.komatsu/Products/Detail/4afd51ec-8566-44b9-9387-2508ca04b223'}
                            >
                                Buy Now
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={2} >
                <Grid item xs={6}>  {/* 40% width for the first section */}
                    <Box p={2} display="flex" alignItems="center">
                        <img src="https://kacscmpeusprdsacdn.azureedge.net/images/Field/637716697307843761_discoverproductmain.png" style={{ width: 510, height: 275}} />
                    </Box>
                </Grid>
                <Grid item xs={6} sx={{ pl: 20 }}>  {/* Right grid with nested container for rows */}
                    <Grid item xs={12} >  {/* Row 1 - full width on xs */}
                        <Box p={2} display="flex" alignItems="center">
                            <Typography variant="h5" align="center" >
                                Field
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>  {/* Row 2 - full width on xs */}
                        <Box p={2} display="flex" alignItems="left">
                            <Typography >
                                Use a mobile app to record jobsite activity and analyze your operational costs and efficiencies in near real time.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>  {/* Row 3 - full width on xs */}
                        <Box p={1} display="flex" >
                            <div><b>Key Features</b></div>
                        </Box>
                        <Box p={1} display="flex" >
                            <div>
                                <ul>
                                    <li>
                                        Manage site activity, task, and costs
                                    </li>
                                    <li>
                                        Visualize health of the project
                                    </li>
                                    <li>
                                        Daily reporting eliminates challenging paperwork
                                    </li>
                                </ul>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box p={1} display="flex" >
                            <Button
                                type="button"
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={() => window.location.href = 'https://smartconstruction.mykomatsu.komatsu/Products/Detail/cb91968d-9577-475f-bce7-3a90d8611b8e'}
                            >
                                Buy Now
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default SolutionsComponent;
