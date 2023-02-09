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
        <AppBar position="absolute" sx={{ zIndex: "100" }} color="transparent">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        position="relative"
                        sx={{ width: { xs: "100px" } }}
                        height={80}
                    >
                        <Image alt={"logo"} src={"/img/MT.png"} fill />
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
                                        <Typography textAlign="center">
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
                    >
                        {buttonText.map((button) => (
                            <Button
                                key={button}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                {button}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Appbar;
