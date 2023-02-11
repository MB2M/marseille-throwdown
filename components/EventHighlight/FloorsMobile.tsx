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
                        sx={{
                            borderRadius: "21px",
                        }}
                        overflow={"hidden"}
                    >
                        <Image
                            alt="dome"
                            src="/img/beach.png"
                            width={340}
                            height={340}
                            style={{
                                transform: "translate(-120px, -60px)",
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
                            src="/img/dome.png"
                            width={340}
                            height={340}
                            style={{
                                transform: "translate(-120px, -60px)",
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
