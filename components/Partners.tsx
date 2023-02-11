import { Box, Typography, easing } from "@mui/material";
import AnimatedInView from "./AnimatedInView";
import Image from "next/image";
import { animated, easings, useSpring } from "@react-spring/web";
import { config } from "@react-spring/web";

const partners = [
    "FitFactory.png",
    "CrossfitMassilia2.png",
    "tako.png",
    "FitFactory.png",
    "CrossfitMassilia2.png",
    "tako.png",
    "FitFactory.png",
    "CrossfitMassilia2.png",
    "tako.png",
];

const AnimatedBox = animated(Box);

const Partners = () => {
    const props = useSpring({
        from: { x: 0 },
        to: { x: (-230 - 32) * partners.length },
        loop: true,
        config: {
            duration: 30000,
        },
    });

    return (
        <Box px={4} pt={4} pb={8} sx={{ backgroundColor: "#242424" }}>
            <Typography
                sx={{ color: "A5C3FA" }}
                fontSize={"32px"}
                fontFamily={"NunitoBlack"}
                textAlign={"center"}
                p={2}
            >
                Nos partenaires
            </Typography>
            <AnimatedBox
                gap={4}
                style={props}
                position="relative"
                display="flex"
                width={partners.length * (230 + 32) * 2}
                // sx={{ background: "green" }}
            >
                {partners.map((partner) => (
                    <Box
                        key={partner}
                        position="relative"
                        minWidth={230}
                        maxWidth={230}
                        height={230}
                    >
                        <Image alt="" src={`/img/${partner}`} fill />
                    </Box>
                ))}
                {partners.map((partner) => (
                    <Box
                        key={partner}
                        position="relative"
                        minWidth={230}
                        maxWidth={230}
                        height={230}
                    >
                        <Image alt="" src={`/img/${partner}`} fill />
                    </Box>
                ))}
            </AnimatedBox>
            {/* </animated.div> */}
        </Box>
    );
};

export default Partners;
