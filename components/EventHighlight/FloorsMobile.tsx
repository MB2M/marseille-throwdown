import { Box, Stack, Typography } from "@mui/material";
import AnimatedInView from "../AnimatedInView";
import Image from "next/image";

const FloorsMobile = () => {
    return (
        <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            mt={6}
            gap={2}
        >
            <Box display="flex">
                <AnimatedInView
                    triggerOnce
                    threshold={0.9}
                    changes={[
                        {
                            keyName: "transform",
                            initial: "rotate(0deg)",
                            end: "rotate(5deg)",
                        },
                        {
                            keyName: "x",
                            initial: -20,
                            end: 0,
                        },
                        { keyName: "opacity", initial: 0, end: 1 },
                    ]}
                >
                    <Box
                        position={"relative"}
                        left={80}
                        width={102}
                        height={215}
                        border={"2px solid gray"}
                        sx={{
                            borderRadius: "21px",
                        }}
                        overflow={"hidden"}
                    >
                        <Image
                            alt="dome"
                            src="/img/beach2.jpeg"
                            width={2048/5}
                            height={1365/5}
                            style={{
                                transform: "translate(-60px, -60px)",
                                boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.75)",
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
                            src="/img/dome2.jpeg"
                            width={1900 /4}
                            height={950/4}
                            style={{
                                transform: "translate(-160px, -0px)",
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
                        fontFamily={"strasua"}
                        fontSize={20}
                        color={"secondary"}
                    >
                        2 lieux d&apos;épreuve
                    </Typography>
                    <Typography
                        fontFamily={"NunitoRegular"}
                        fontSize={16}
                        sx={{ color: "#A5C3FA" }}
                    >
                        Dôme de Marseille
                    </Typography>
                    <Typography
                        fontFamily={"NunitoRegular"}
                        fontSize={16}
                        sx={{ color: "#A5C3FA" }}
                    >
                        Plage de Marseille
                    </Typography>
                </Stack>
            </AnimatedInView>
        </Box>
    );
};

export default FloorsMobile;
