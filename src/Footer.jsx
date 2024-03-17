
import {Container, Grid, Typography} from "@mui/material";

import React from "react";
import { List, ListItem } from '@mui/material';
function Footer() {
    return (
        <Container maxWidth="lg">  {/* Adjust maxWidth as needed */}
            <Grid container spacing={2} color={"#030C71"}>
                <Grid item xs={3}>  {/* 40% width for the first section */}
                    <Typography variant="h6">
                        Discover
                    </Typography>
                    <List>
                        <ListItem>Products</ListItem>
                        <ListItem>Parts and attachments</ListItem>
                        <ListItem>Industries</ListItem>
                        <ListItem>Technology</ListItem>
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