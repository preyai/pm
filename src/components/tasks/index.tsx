import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from "@mui/material"

const Tasks = () => {
    return (
        <Box>
            <Typography variant="h2">Tasks</Typography>
            <Grid container spacing={2}>
                {['1', '2', '3', '4', '5'].map((item) => (
                    <Grid item xs={12} key={item}>
                        <Card>
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

export default Tasks