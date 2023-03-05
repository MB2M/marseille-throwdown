import { Box, Stack, Typography } from "@mui/material";
import AnimatedInView from "../AnimatedInView";
import Image from "next/image";

const Competitors = () => {
    return (
        <Box>
            <Stack position="relative" top={60} right={-60} zIndex={1}>
                <Typography
                    variant="h4Strasua"
                    color={"secondary"}
                    right={65}
                    top={20}
                    position={"relative"}
                >
                    496
                </Typography>
                <Typography
                    left={50}
                    variant="h4Strasua"
                    color={"secondary"}
                    position={"relative"}
                >
                    athlètes
                </Typography>
            </Stack>
            <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mt={6}
                gap={2}
            >
                {/* <Box display="flex"> */}
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
                        width={226}
                        height={147}
                        sx={{
                            boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.75)",
                            borderRadius: "21px",
                        }}
                        border={"2px solid gray"}
                        overflow={"hidden"}
                    >
                        <Image
                            alt="horde"
                            src="/img/horde2.jpeg"
                            width={1638 / 6.5}
                            height={2048 / 6.5}
                            style={{
                                transform: "translate(-25px,-110px)",
                            }}
                        />
                    </Box>
                </AnimatedInView>
                <AnimatedInView
                    changes={[{ keyName: "opacity", initial: 0, end: 1 }]}
                    threshold={1}
                    triggerOnce
                >
                    <Stack gap={0}>
                        <Typography
                            variant="h6"
                            fontFamily={"NunitoRegular"}
                            // textAlign={"end"}
                            sx={{ color: "#A5C3FA" }}
                            width={140}
                        >
                            pour un maximum de spectacle et de compétition
                        </Typography>
                    </Stack>
                </AnimatedInView>
                {/* </Box> */}
            </Box>
        </Box>
    );
};

export default Competitors;
