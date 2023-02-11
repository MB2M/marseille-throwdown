import Appbar from "@/components/Appbar";
import Individuals from "@/components/Categories/Individuals";
import Teams from "@/components/Categories/Teams";
import EventHighLight from "@/components/EventHighlight";
import Partners from "@/components/Partners";
import Individual from "@/components/Qualifications/Individual";
import Team from "@/components/Qualifications/Team";
import Wods from "@/components/Qualifications/Wods";
import Title from "@/components/Title";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Image from "next/image";

export default function Home() {
    return (
        <Box sx={{ backgroundColor: "#0D0A07" }}>
            <Appbar />
            <Box position={"relative"} top={0} width={1} height={"100vh"}>
                <Image
                    alt={"landing"}
                    src={"/img/landing.jpg"}
                    fill
                    style={{ objectFit: "cover" }}
                    // objectFit={"cover"}
                />
                <Stack
                    position={"absolute"}
                    top={"60%"}
                    sx={{ backgroundColor: "#000000ad" }}
                    width={1}
                    pb={0.8}
                    px={2}
                >
                    {/* <Typography
                        color={"primary"}
                        fontFamily={"MichromaRegular"}
                        fontSize={32}
                        textAlign={"end"}
                    >
                        WHO WILL BE THE FITTEST ON MARS ?
                    </Typography> */}
                    <Title />
                    <Typography
                        variant="h4"
                        color={"secondary"}
                        fontFamily={"MichromaRegular"}
                        fontSize={24}
                        textAlign={"end"}
                    >
                        28 - 30 Juillet 2023
                    </Typography>
                </Stack>
            </Box>
            <Box p={4}>
                <Typography
                    variant="h4"
                    sx={{ color: "#A5C3FA" }}
                    fontFamily={"NunitoBlack"}
                    textAlign={"center"}
                    p={2}
                >
                    Venez participer à l&apos;une des plus belles compétitions
                    de France cet été.
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ color: "#A5C3FA" }}
                    textAlign={"center"}
                    fontFamily={"NunitoRegular"}
                    my={1}
                    px={2}
                >
                    C’est l’occasion idéale de mettre vos compétences à
                    l&apos;épreuve et de vous mesurer aux autres passionnés.
                    <br />
                    Des exercices de force, de cardio et de gymnastique vous
                    attendent pour un défi physique et mental qui vous poussera
                    à donner le meilleur de vous-même.
                    <br /> N&apos;attendez plus et inscrivez-vous dès maintenant
                    pour relever ce défi!
                </Typography>
                <EventHighLight />
                <Box textAlign={"center"} my={8}>
                    <Button
                        size="large"
                        variant="contained"
                        color="secondary"
                        sx={{ color: "black" }}
                        // sx={{ fontFamily: "NunitoBlack" }}
                    >
                        S&apos;inscire
                    </Button>
                </Box>
            </Box>
            <Box p={4} sx={{ backgroundColor: "#242424" }}>
                <Typography
                    sx={{ color: "#A5C3FA" }}
                    fontSize={"32px"}
                    fontFamily={"NunitoBlack"}
                    textAlign={"center"}
                    p={2}
                    id="qualifications"
                >
                    Les qualifications
                </Typography>
                <Grid2 container>
                    <Grid2 xs={12} md={4}>
                        <Individual />
                    </Grid2>
                    <Grid2 xs={12} md={4}>
                        <Team />
                    </Grid2>
                    <Grid2 xs={12} md={4}>
                        <Wods />
                    </Grid2>
                </Grid2>
                <Box textAlign={"center"} my={8}>
                    <Button
                        size="large"
                        variant="contained"
                        color="secondary"
                        // sx={{ color: "#A5C3FA" }}
                        // sx={{ fontFamily: "NunitoBlack" }}
                    >
                        S&apos;inscire
                    </Button>
                </Box>
            </Box>
            <Box p={4}>
                <Typography
                    sx={{ color: "#A5C3FA" }}
                    fontSize={"32px"}
                    fontFamily={"NunitoBlack"}
                    textAlign={"center"}
                    p={2}
                    id="categories"
                >
                    Les catégories
                </Typography>
                <Typography
                    color={"primary"}
                    fontSize={"32px"}
                    fontFamily={"NunitoBlack"}
                    textAlign={"center"}
                    p={2}
                >
                    INDIVIDUEL
                </Typography>
                <Individuals />

                <Typography
                    color={"primary"}
                    fontSize={"32px"}
                    fontFamily={"NunitoBlack"}
                    textAlign={"center"}
                    p={2}
                    mt={4}
                >
                    EQUIPE
                </Typography>
                <Teams />
            </Box>
            <Box id="partenaires">
                <Partners />
            </Box>
            <Box p={4}>
                <Typography
                    sx={{ color: "#A5C3FA" }}
                    fontSize={"32px"}
                    fontFamily={"NunitoBlack"}
                    textAlign={"center"}
                    p={2}
                    id="volontaires"
                >
                    Volontaires ? Les Marseille Throwdown ont besoin de vous !
                </Typography>
                <Box textAlign={"center"} my={2}>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ color: "black" }}
                        // sx={{ fontFamily: "NunitoBlack" }}
                    >
                        Contactez-nous
                    </Button>
                </Box>
                <Divider sx={{ mt: 6, mb: 2, backgroundColor: "#A5C3FA" }} />

                <Typography sx={{ color: "#A5C3FA" }} textAlign={"center"}>
                    Marseille Throwdown 2023. Tous droits réservés.
                </Typography>
            </Box>
        </Box>
    );
}
