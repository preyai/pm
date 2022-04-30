import { Typography } from "@mui/material"
import { SetStateAction, useEffect, useState } from "react"
import { app } from "../../utils/feather"

const Dashboard = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        app.service('projects').find()
            .then((response: { json: () => any }) => (response.json()))
            .then((data: SetStateAction<never[]>) => {
                console.log(data)
                setData(data)
            })
    }, [])

    return (
        <Typography variant="h1">Welcome</Typography>
    )
}

export default Dashboard