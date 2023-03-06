import { Box, Stack, Typography } from "@mui/material";
import AnimatedInView from "../AnimatedInView";
import Image from "next/image";

const Individual = () => {
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
                        keyName: "transform",
                        initial: "rotate(0deg)",
                        end: "rotate(-5deg)",
                    },
                    {
                        keyName: "x",
                        initial: 20,
                        end: 0,
                    },
                    { keyName: "opacity", initial: 0, end: 1 },
                ]}
            >
                <Box
                    position={"relative"}
                    width={131}
                    height={215}
                    border={"2px solid gray"}
                    sx={{
                        borderRadius: "21px",
                        boxShadow: "3px 3px 5px black",
                    }}
                    overflow={"hidden"}
                >
                    <Image
                        alt="dome"
                        src="/img/indiv2.jpeg"
                        width={1367/6}
                        height={2048/6}
                        style={{
                            transform: "translate(-47px, -80px)", objectFit:"cover"
                        }}
                    />
                </Box>
            </AnimatedInView>
            <AnimatedInView
                changes={[{ keyName: "opacity", initial: 0, end: 1 }]}
                threshold={1}
                triggerOnce
            >
                <Stack gap={2} pl={2}>
                    <Typography
                        fontFamily={"Strasua"}
                        fontSize={20}
                        color={"primary"}
                    >
                        Individuels
                    </Typography>
                    <Typography
                        variant="h6"
                        fontFamily={"NunitoRegular"}
                        // fontSize={16}
                        sx={{ color: "#A5C3FA" }}
                    >
                        8 Mai - 25 Mai
                    </Typography>
                </Stack>
            </AnimatedInView>
        </Box>
    );
};

export default Individual;
