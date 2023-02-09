import { Box, Stack, Typography } from "@mui/material";
import AnimatedInView from "../AnimatedInView";
import Image from "next/image";

const Categories = () => {
    return (
        <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            mt={6}
            gap={0}
        >
            <Box display="flex">
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
                        width={102}
                        height={215}
                        sx={{
                            borderRadius: "21px",
                        }}
                        overflow={"hidden"}
                    >
                        <Image
                            alt="dome"
                            src="/img/men_women.png"
                            width={220}
                            height={220}
                            style={{
                                transform: "translate(-60px, 0px)",
                            }}
                            objectFit="cover"
                        />
                    </Box>
                </AnimatedInView>
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
                        width={102}
                        height={215}
                        left={-80}
                        sx={{
                            borderRadius: "21px",
                            boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.75)",
                        }}
                        overflow={"hidden"}
                    >
                        <Image
                            alt="dome"
                            src="/img/2_womens.png"
                            width={220}
                            height={220}
                            style={{
                                transform: "translate(-60px, 0px)",
                            }}
                            objectFit="cover"
                        />
                    </Box>
                </AnimatedInView>
            </Box>
            <AnimatedInView
                changes={[{ keyName: "opacity", initial: 0, end: 1 }]}
                threshold={1}
                triggerOnce
            >
                <Stack gap={3}>
                    <Typography
                        fontFamily={"MichromaRegular"}
                        fontSize={"1.25rem"}
                        color={"secondary"}
                    >
                        20 catégories
                    </Typography>
                    <Typography
                        fontFamily={"NunitoRegular"}
                        fontSize={"1rem"}
                        sx={{ color: "white" }}
                    >
                        Pour que chacun puisse participer
                    </Typography>
                </Stack>
            </AnimatedInView>
        </Box>
    );
};

export default Categories;
