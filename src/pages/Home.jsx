import { Box, Grid } from '@mui/material';
import { Page } from 'components/Page';
import { MediaCard } from 'components/MediaCard';

export const Home = () => <Page title="I am the home page">  
    <Grid container spacing={2}>
        <Grid item xs={4}>
            <MediaCard sx={{'.MuiCardMedia-root[role="img"]': {backgroundPosition: 'top'}}} image="/people/guy.png" title="Guy Thomas">
                <Box>Hi! My name is Guy Thomas. I am the director of Citricity Ltd.</Box>
            </MediaCard>
        </Grid>
        <Grid item xs={4}>
            <MediaCard sx={{'.MuiCardMedia-root[role="img"]': {backgroundPosition: 'top'}}} image="/people/Fred Smith.jpg" title="Fred Smith">
                <Box>Hi! My name is Fred Smith. I am the communications officer here at Citricity Ltd.</Box>
            </MediaCard>
        </Grid>
        <Grid item xs={4}>
            <MediaCard sx={{'.MuiCardMedia-root[role="img"]': {backgroundPosition: 'top'}}} image="/people/gail.jpg" title="Gail Johnson">
                <Box>Hi! My name is Gail Johnson. I am the HR officer here at Citricity Ltd.</Box>
            </MediaCard>
        </Grid>
    </Grid>
</Page>;