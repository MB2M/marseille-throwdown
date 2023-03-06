import MenuIcon from "@mui/icons-material/Menu";
import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from "@mui/material";
import { MouseEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const buttonText = [
    "Qualifications",
    "Catégories",
    "Partenaires",
    "Volontaires",
];

const Appbar = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <AppBar
            position="absolute"
            sx={{ zIndex: "100", boxShadow: "none", bgcolor: "#000d2d" }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        p={1}
                        position="relative"
                        sx={{
                            width: { xs: "80px", md: "80px" },
                            height: { xs: "80px", md: "80px" },
                        }}
                        // height={80}
                    >
                        <Image
                            alt={"logo"}
                            src={"/img/MT.jpeg"}
                            style={{ objectFit: "contain" }}
                            fill
                            sizes={"80px"}

                        />
                    </Box>
                    <Box
                        sx={{
                            // flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                            ml: "auto",
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="secondary"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {buttonText.map((button) => (
                                <Link
                                    href={`#${button
                                        .replace("é", "e")
                                        .toLowerCase()}`}
                                    key={button}
                                >
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography
                                            textAlign="center"
                                            fontFamily={"strasua"}
                                        >
                                            {button}
                                        </Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                    <Box
                        sx={{
                            // flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                        gap={4}
                        mx={8}
                    >
                        {buttonText.map((button) => (
                            <Link
                                href={`#${button
                                    .replace("é", "e")
                                    .toLowerCase()}`}
                                key={button}
                            >
                                <Button
                                    key={button}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2,
                                        color: "#A5C3FA",
                                        display: "block",
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        fontFamily={"strasua"}
                                    >
                                        {button}
                                    </Typography>
                                </Button>{" "}
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Appbar;
