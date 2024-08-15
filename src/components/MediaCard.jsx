import { Card, CardMedia, CardContent, Typography } from '@mui/material';

export const MediaCard = (props) => <Card sx={{...(props.sx ?? {}), maxWidth: 345 }}>
<CardMedia
  sx={{ height: 240 }}
  image={props.image}
  title={props.title}
/>
<CardContent>
  <Typography gutterBottom variant="h5" component="div">
    {props.title}
  </Typography>
  <Typography variant="body2" color="text.secondary">
    {props.children}
  </Typography>
</CardContent>
{/* <CardActions>
  <Button size="small">Share</Button>
  <Button size="small">Learn More</Button>
</CardActions> */}
</Card>