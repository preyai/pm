import { SvgIconComponent } from "@mui/icons-material";

export interface Page {
    title: string,
    path: string,
    icon: SvgIconComponent,
    element: JSX.Element
}