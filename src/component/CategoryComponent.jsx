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

const CategoryComponent = ({ category }) => {
    const classes = useStyles();

    const titlesData = {
        "machines": ['Blasthole Drills', 'Crushing', 'Dozers', 'Draglines', 'Electric Rope Shovels', 'Entry Development'],
        "parts":    ['Air Filters', 'Breather Fitlers', 'Corrosion Resistor', 'Engine Oil Filters', 'Filters Kit', 'Fuel Filters']
    };

    const imagesData = {
        'Blasthole Drills':'https://komatsu.stylelabs.cloud/api/public/content/Related_6478d3f017dc49e9a23131c29a866945?v=2c3c232f',
        'Crushing':'https://komatsu.stylelabs.cloud/api/public/content/RelatedProducts_8852417d275449f6aaf572677bef53a5?v=3ed56c6a',
        'Dozers':'https://komatsu.stylelabs.cloud/api/public/content/Thumb_SM_62fb608aecc54b9480492311f8b14db5?v=4ad3107f',
        'Draglines':'https://komatsu.stylelabs.cloud/api/public/content/2Related_ef031d8fc67a45f7a1a028481b91656d?v=57e433fb',
        'Electric Rope Shovels':'https://komatsu.stylelabs.cloud/api/public/content/productthumbsm_1c458be0ddad458599b1f66eaee1c1f7?v=b6eb0cdd',
        'Entry Development':'https://komatsu.stylelabs.cloud/api/public/content/306d4d333f3e4631aae767fa684ef12e?v=32fa3397',
        'Air Filters':'https://mykomats-prd-storageaccount.azureedge.net/partsimage/FT_Filters.png?29032024',
        'Breather Fitlers':'https://mykomats-prd-storageaccount.azureedge.net/partsimage/207-60-51310-WM.jpg?29032024',
        'Corrosion Resistor':'https://mykomats-prd-storageaccount.azureedge.net/partsimage/1257937H1-WM.jpg?29032024',
        'Engine Oil Filters':'https://mykomats-prd-storageaccount.azureedge.net/partsimage/600-212-1411-WM.jpg?29032024',
        'Filters Kit':'https://mykomats-prd-storageaccount.azureedge.net/partsimage/Main_Fuel_Filter.png?29032024',
        'Fuel Filters':'https://mykomats-prd-storageaccount.azureedge.net/partsimage/207-60-71183-WM.jpg?29032024'
    };
    return (
        <Container maxWidth="false" sx={{
            paddingBottom:'10vh',
        }}>

            <Grid container spacing={2} >
                <Grid item xs={12} sx={{
                    padding:'2vh',
                }}>  {/* 40% width for the first section */}
                    <Typography variant="h4" className={classes.title} sx={{ paddingTop: '2vh' }}>
                        {category.toUpperCase()}
                    </Typography>
                </Grid>

                {titlesData[category].map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={item} >
                        <Link to={`/kx_member_network/${category}`}>
                            <Box p={2} display="flex" alignItems="center" justifyContent="center">
                                <img src={imagesData[item]} alt={item} style={{ width: 200, height: 200, marginRight: 20 }} />
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
