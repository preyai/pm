import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { Project } from "../../interfaces/project"

interface ProjectCardProps {
    project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    const navigate = useNavigate()
    return (
        <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card>
                <CardMedia
                    component="img"
                    height="140"
                    image={project.image} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {project.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small" onClick={() => { navigate(`/projects/${project.id}`) }}>Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default ProjectCard