import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"

const Projects = () => {
    return (
        <Box>
            <Typography variant="h2">Projects</Typography>
            <Grid container spacing={2}>
                {['1', '2', '3', '4', '5'].map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item}>
                        <Card>
                            <CardMedia
                                component="img"
                                height="140"
                                image='https://mui.com/static/images/cards/contemplative-reptile.jpg'
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default Projects