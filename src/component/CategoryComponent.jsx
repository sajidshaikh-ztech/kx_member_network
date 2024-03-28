import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from "@mui/material/Typography"
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import {Container} from "@mui/material";
import Box from "@mui/material/Box";


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

const CategoryComponent = () => {
    const classes = useStyles();
    const titles = ['Blasthole Drills', 'Crushing', 'Dozers', 'Draglines',
        'Electric Rope Shovels', 'Entry Development'];
    const images = [
        'https://komatsu.stylelabs.cloud/api/public/content/Related_6478d3f017dc49e9a23131c29a866945?v=2c3c232f',
        'https://komatsu.stylelabs.cloud/api/public/content/RelatedProducts_8852417d275449f6aaf572677bef53a5?v=3ed56c6a',
        'https://komatsu.stylelabs.cloud/api/public/content/Thumb_SM_62fb608aecc54b9480492311f8b14db5?v=4ad3107f',
        'https://komatsu.stylelabs.cloud/api/public/content/2Related_ef031d8fc67a45f7a1a028481b91656d?v=57e433fb',
        'https://komatsu.stylelabs.cloud/api/public/content/productthumbsm_1c458be0ddad458599b1f66eaee1c1f7?v=b6eb0cdd',
        'https://komatsu.stylelabs.cloud/api/public/content/306d4d333f3e4631aae767fa684ef12e?v=32fa3397'
    ];
    return (
        <Container maxWidth="false" sx={{
            paddingBottom:'10vh',
        }}>

            <Grid container spacing={2} >
                <Grid item xs={12} sx={{
                    padding:'2vh',
                }}>  {/* 40% width for the first section */}
                    <Typography variant="h4" className={classes.title} sx={{ paddingTop: '2vh' }}>
                        Crushing Equipment
                    </Typography>
                </Grid>
                {titles.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={item} >
                        <Link to={`/products-listing`}>
                            <Box p={2} display="flex" alignItems="center" justifyContent="center">
                                <img src={images[index]} alt="Large Image" style={{ width: 200, height: 200, marginRight: 20 }} />
                            </Box>
                        </Link>
                        <Box p={2} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h6" align="center" >
                                   {item}
                            </Typography>
                        </Box>

                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default CategoryComponent;
