import { SvgIconComponent } from "@mui/icons-material";

export interface Page {
    path: string,
    element: JSX.Element
    pages?: Page[]
}

export interface MenuPage {
    title: string,
    path: string,
    icon: SvgIconComponent,
}