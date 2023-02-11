import Grid2 from "@mui/material/Unstable_Grid2";
import CategoriesMobile from "./EventHighlight/CategoriesMobile";
import CompetitionDaysMobile from "./EventHighlight/CompetitionDaysMobile";
import CompetitorsMobile from "./EventHighlight/CompetitorsMobile";
import FloorsMobile from "./EventHighlight/FloorsMobile";
import VolunteersMobile from "./EventHighlight/VolunteersMobile";
import { useMediaQuery } from "@mui/material";
import { theme } from "@/styles/themes";
import Floors from "./EventHighlight/Floors ";
import CompetitionDays from "./EventHighlight/CompetitionDays";
import Competitors from "./EventHighlight/Competitors";
import Volunteers from "./EventHighlight/Volunteers";
import Categories from "./EventHighlight/Categories";

const EventHighlight = () => {
    const isMD = useMediaQuery(theme.breakpoints.up("md"));

    return (
        <Grid2
            container
            alignItems="center"
            textAlign={"center"}
            justifyContent={"space-around"}
            spacing={6}
        >
            {/* <Box
                sx={{
                    maxWidth: {
                        xs: "400px",
                    },
                }}
            > */}
            <Grid2 xs={12} md={6} xl={4}>
                {isMD ? <Floors /> : <FloorsMobile />}
            </Grid2>
            <Grid2 xs={12} md={6} xl={4}>
                {isMD ? <CompetitionDays /> : <CompetitionDaysMobile />}
            </Grid2>
            <Grid2 xs={12} md={6} xl={4}>
                {isMD ? <Competitors /> : <CompetitorsMobile />}
            </Grid2>
            <Grid2 xs={12} md={6} xl={4}>
                {isMD ? <Volunteers /> : <VolunteersMobile />}
            </Grid2>
            <Grid2 xs={12} md={6} xl={4}>
                {isMD ? <Categories /> : <CategoriesMobile />}
            </Grid2>
            {/* </Box> */}
        </Grid2>
    );
};

export default EventHighlight;
