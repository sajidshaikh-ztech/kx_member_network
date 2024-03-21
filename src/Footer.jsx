
import {Container, Grid, Typography} from "@mui/material";

import React from "react";
import { List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <Container maxWidth="lg">  {/* Adjust maxWidth as needed */}
            <Grid container spacing={2} color={"#030C71"}>
                <Grid item xs={3}>  {/* 40% width for the first section */}
                    <Typography variant="h6">
                        Associate Websites
                    </Typography>
                    <List>
                        <a href="http://www.modularmining.com" target="_blank">
                            Modular Alarming
                        </a><br/>
                        <a href="http://www.ivolve.com" target="_blank" >
                            Ivolve
                        </a><br/>
                        <a color="inherit" href="http://www.montabert.com" target="_blank" >
                            Montabert
                        </a><br/>
                        <a href="http://www.komatsuforklift.com" target="_blank" >
                            Komatsu Forklifts
                        </a><br/>
                        <a color="inherit" href="http://www.komatsufinancial.com" target="_blank" underline="none">
                            Komatsu Financial
                        </a><br/>
                        <a color="inherit" href="http://www.quadco.com" target="_blank" underline="none">
                            Quadco
                        </a><br/>
                        <a color="inherit" href="http://www.hensely.com" target="_blank" underline="none">
                            Hensely
                        </a><br/>
                        <a color="inherit" href="http://www.timberpro.com" target="_blank" underline="none">
                            Timberpro
                        </a><br/>
                        <a color="inherit" href="http://www.americanbatterysolutions.com" target="_blank" underline="none">
                            American Battery Solutions
                        </a><br/>
                    </List>
                </Grid>
                <Grid item xs={3}>  {/* 40% width for the first section */}
                    <Typography variant="h6">
                        Tools
                    </Typography>
                    <List>
                        <ListItem>Request a quote</ListItem>
                        <ListItem>Locator tool</ListItem>
                        <ListItem>My Komatsu</ListItem>
                        <ListItem>Competitive comparison</ListItem>
                        <ListItem>Mining Analytics Platform</ListItem>
                    </List>
                </Grid>
                <Grid item xs={3}>  {/* 40% width for the first section */}
                    <Typography variant="h6">
                        Company
                    </Typography>
                    <List>
                        <ListItem>About</ListItem>
                        <ListItem>Blog</ListItem>
                        <ListItem>Careers</ListItem>
                        <ListItem>Commitment to society</ListItem>
                        <ListItem> Events</ListItem>
                        <ListItem> Merchandise</ListItem>
                        <ListItem>Newsroom</ListItem>
                        <ListItem>Success stories</ListItem>
                        <ListItem> Investor relations</ListItem>
                    </List>
                </Grid>
                <Grid item xs={3}>  {/* 40% width for the first section */}
                    <Typography variant="h6">
                        Connect
                    </Typography>
                    <List>
                        <ListItem>Contact us</ListItem>
                        <ListItem>Social media</ListItem>
                        <ListItem>Customer / dealer portals</ListItem>
                        <ListItem>Suppliers</ListItem>
                    </List>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Footer;