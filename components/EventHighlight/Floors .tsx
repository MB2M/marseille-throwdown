import { Box, Stack, Typography } from "@mui/material";
import AnimatedInView from "../AnimatedInView";
import Image from "next/image";

const Floors = () => {
    return (
        <Box
            display={"flex"}
            // justifyContent={"center"}
            alignItems={"center"}
            mt={6}
            gap={2}
        >
            <Box display="flex" position="relative">
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
                    <Typography
                        fontFamily={"NunitoRegular"}
                        bottom={-35}
                        right={-280}
                        variant="h5"
                        position="absolute"
                        fontWeight={800}
                        sx={{
                            color: "#A5C3FA",
                            textShadow: "4px 4px 4px #000",
                        }}
                        zIndex={1}
                    >
                        Plage de Marseille
                    </Typography>
                    <Box
                        position={"relative"}
                        left={260}
                        top={20}
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
                            alt="beach"
                            src="/img/beach2.jpeg"
                            // width={200}
                            // height={200}
                            fill
                            style={{
                                objectFit: "cover",
                                //     transform: "translate(-120px, -60px)",
                            }}
                            sizes={"226px"}

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
                    <Box>
                        <Typography
                            fontFamily={"NunitoRegular"}
                            top={-20}
                            left={-40}
                            variant="h5"
                            position="absolute"
                            fontWeight={800}
                            sx={{
                                color: "#A5C3FA",
                                textShadow: "4px 4px 4px #000",
                            }}
                            zIndex={1}
                        >
                            Dôme de Marseille
                        </Typography>
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
                                src="/img/dome2.jpeg"
                                width={500}
                                height={250}
                                style={{
                                    transform: "translate(-110px, -80px)",
                                    objectFit: "cover",
                                }}
                            />
                        </Box>
                    </Box>
                </AnimatedInView>
                <Box
                    position="absolute"
                    bottom={-100}
                    left={80}
                    textAlign={"left"}
                >
                    <AnimatedInView
                        changes={[{ keyName: "opacity", initial: 0, end: 1 }]}
                        threshold={1}
                        triggerOnce
                    >
                        <Stack>
                            <Typography variant="h4Strasua" color={"secondary"}>
                                2 lieux
                            </Typography>
                            <Typography
                                variant="h4Strasua"
                                color={"secondary"}
                                pl={4}
                                top={-10}
                                position={"relative"}
                            >
                                d&apos;épreuve
                            </Typography>
                        </Stack>
                    </AnimatedInView>
                </Box>
            </Box>
        </Box>
    );
};

export default Floors;
