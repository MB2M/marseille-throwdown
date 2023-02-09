declare module "@mui/material/styles" {
    export interface TypographyVariants {
        bigTitle: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    export interface TypographyVariantsOptions {
        bigTitle?: React.CSSProperties;
    }

    export interface TypographyStyleOptions {
        bigTitle?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
    export interface TypographyPropsVariantOverrides {
        bigTitle: true;
    }
}
