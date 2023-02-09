import { Box, Stack, Typography } from "@mui/material";
import { useSpring, animated, SpringRef } from "@react-spring/web";
import Image from "next/image";
import { InView, useInView } from "react-intersection-observer";
import AnimatedInView from "./AnimatedInView";
import Floors from "./EventHighlight/Floors";
import CompetitonDays from "./EventHighlight/CompetitonDays";
import Competitors from "./EventHighlight/Competitors";
import Volunteers from "./EventHighlight/Volunteers";
import Categories from "./EventHighlight/Categories";

const AnimatedBox = animated(Box);
const AnimatedStack = animated(Stack);

const EventHighlight = () => {
    return (
        <Stack alignItems="center" textAlign={"center"}>
            {/* <Box
                sx={{
                    maxWidth: {
                        xs: "400px",
                    },
                }}
            > */}
            <Floors />
            <CompetitonDays />
            <Competitors />
            <Volunteers />
            <Categories />
            {/* </Box> */}
        </Stack>
    );
};

export default EventHighlight;
