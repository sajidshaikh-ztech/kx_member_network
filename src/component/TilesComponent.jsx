import { Container, Grid, Box, Typography, IconButton } from '@mui/material';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function TilesComponent() {
    const titles = ['Site Management', 'Fleet Management', 'Buy Parts', 'Schedule Service',
                            'Academy', 'Subscription Management', 'Warranty Management', 'My Organization',
                            'Financing', 'Parts Books', 'Rewards', 'Profile'];
    //const icons = Array(12).fill(<PrecisionManufacturingIcon sx={{ fontSize: 40 }}/>, <ApartmentIcon sx={{ fontSize: 40 }}/>);
    const icon = [
        <ApartmentIcon sx={{ fontSize: 80 }}/>,
        <PrecisionManufacturingOutlinedIcon sx={{ fontSize: 80 }}/>,
        <SettingsOutlinedIcon sx={{ fontSize: 80 }}/>,
        <HandymanOutlinedIcon sx={{ fontSize: 80 }}/>,
        <SchoolOutlinedIcon sx={{ fontSize: 80 }}/>,
        <CreditCardOutlinedIcon sx={{ fontSize: 80 }}/>,
        <CachedOutlinedIcon sx={{ fontSize: 80 }}/>,
        <GroupsOutlinedIcon sx={{ fontSize: 80 }}/>,
        <DescriptionOutlinedIcon sx={{ fontSize: 80 }}/>,
        <MenuBookOutlinedIcon sx={{ fontSize: 80 }}/>,
        <EmojiEventsOutlinedIcon sx={{ fontSize: 80 }}/>,
        <AccountCircleOutlinedIcon sx={{ fontSize: 80 }}/>
    ];
    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
                {titles.map((title, index) => (
                    <Grid item xs={3} key={index}>
                        <Box sx={{
                            width: '200px',
                            height: '200px',
                            backgroundColor: '#D3D3D3',
                            color: 'primary.contrastText',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Grid container direction="column" spacing={2}>
                                <Grid item textAlign={"center"}>
                                    <IconButton>{icon[index]}</IconButton>
                                </Grid>
                                <Grid item textAlign={"center"} fontWeight={"bold"}>
                                    <Typography variant="h7" color={"#030C71"}>{title}</Typography>
                                </Grid>

                            </Grid>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default TilesComponent;
