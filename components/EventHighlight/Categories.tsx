import { Box, Stack, Typography } from "@mui/material";
import AnimatedInView from "../AnimatedInView";
import Image from "next/image";

const Categories = () => {
    return (
        <Stack>
            <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                mt={6}
            >
                {/* <Box display="flex"> */}
                <AnimatedInView
                    triggerOnce
                    threshold={0.9}
                    changes={[
                        {
                            keyName: "transform",
                            initial: "rotate(0deg)",
                            end: "rotate(-7deg)",
                        },
                        {
                            keyName: "x",
                            initial: 20,
                            end: -10,
                        },
                        { keyName: "opacity", initial: 0, end: 1 },
                    ]}
                >
                    <Box
                        position={"relative"}
                        width={226}
                        height={147}
                        left={-80}
                        border={"2px solid gray"}
                        sx={{
                            borderRadius: "21px",
                            boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.75)",
                        }}
                        overflow={"hidden"}
                    >
                        <Image
                            alt="dome"
                            src="/img/indiv4.jpg"
                            width={1365 / 4}
                            height={2048 / 4}
                            style={{
                                transform: "translate(-80px, -75px)",objectFit:"cover"
                            }}
                        />
                    </Box>
                </AnimatedInView>

                <Typography variant="h4Strasua" color={"secondary"} mx={-4}>
                    20 catégories
                </Typography>
                <AnimatedInView
                    triggerOnce
                    threshold={0.9}
                    changes={[
                        {
                            keyName: "transform",
                            initial: "rotate(0deg)",
                            end: "rotate(11deg)",
                        },
                        {
                            keyName: "x",
                            initial: -20,
                            end: 10,
                        },
                        { keyName: "opacity", initial: 0, end: 1 },
                    ]}
                >
                    <Box
                        position={"relative"}
                        left={80}
                        width={226}
                        height={147}
                        border={"2px solid gray"}
                        sx={{
                            boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.75)",
                            borderRadius: "21px",
                        }}
                        overflow={"hidden"}
                    >
                        <Image
                            alt="dome"
                            src="/img/team.jpg"
                            width={960 / 1.8}
                            height={640 / 1.8}
                            style={{
                                transform: "translate(-200px, -50px)",objectFit:"cover"
                            }}
                        />
                    </Box>
                </AnimatedInView>

                {/* </Box> */}
            </Box>
            <AnimatedInView
                changes={[{ keyName: "opacity", initial: 0, end: 1 }]}
                threshold={1}
                triggerOnce
            >
                <Stack gap={3}>
                    <Typography
                        variant="h6"
                        fontFamily={"NunitoRegular"}
                        sx={{ color: "#A5C3FA" }}
                    >
                        Pour que chacun puisse participer
                    </Typography>
                </Stack>
            </AnimatedInView>
        </Stack>
    );
};

export default Categories;
