import { TypographyStyleOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/styles" {
    export interface TypographyVariants {
        bigTitle: React.CSSProperties;
        h4Strasua: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    export interface TypographyVariantsOptions {
        bigTitle?: React.CSSProperties;
        h4Strasua: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
    export interface TypographyPropsVariantOverrides {
        bigTitle: true;
        h4Strasua: true;
    }
}
