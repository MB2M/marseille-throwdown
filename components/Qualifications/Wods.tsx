import { Box, Stack, Typography } from "@mui/material";
import AnimatedInView from "../AnimatedInView";
import Image from "next/image";

const Wods = () => {
    return (
        <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            mt={6}
            gap={2}
        >
            <AnimatedInView
                triggerOnce
                threshold={0.9}
                changes={[
                    {
                        keyName: "x",
                        initial: 20,
                        end: 0,
                    },
                    { keyName: "opacity", initial: 0, end: 1 },
                ]}
            >
                <Box
                    display={"flex"}
                    alignItems={"flex-end"}
                    justifyContent={"center"}
                    gap={2}
                    py={4}
                >
                    <Typography
                        color={"primary"}
                        fontSize={150}
                        fontWeight={900}
                        textAlign={"center"}
                        fontFamily={"NunitoRegular"}
                        lineHeight={1}
                        px={2}
                        sx={{ textShadow: "7px 7px 0px black" }}
                    >
                        3
                    </Typography>
                    <Typography
                        fontFamily={"MichromaRegular"}
                        fontSize={20}
                        color={"white"}
                        my={2}
                    >
                        wods de qualifications
                    </Typography>
                </Box>
            </AnimatedInView>
        </Box>
    );
};

export default Wods;
