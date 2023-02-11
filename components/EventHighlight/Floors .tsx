import { Box, Stack, Typography } from "@mui/material";
import AnimatedInView from "../AnimatedInView";
import Image from "next/image";

const Floors = () => {
    return (
        <Box
            display={"flex"}
            justifyContent={"center"}
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
                            color: "white",
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
                        sx={{
                            borderRadius: "21px",
                        }}
                        overflow={"hidden"}
                    >
                        <Image
                            alt="dome"
                            src="/img/beach.png"
                            // width={200}
                            // height={200}
                            fill
                            // style={{
                            //     transform: "translate(-120px, -60px)",
                            // }}
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
                    <Box>
                        <Typography
                            fontFamily={"NunitoRegular"}
                            top={-20}
                            left={-40}
                            variant="h5"
                            position="absolute"
                            fontWeight={800}
                            sx={{
                                color: "white",
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
                            sx={{
                                borderRadius: "21px",
                                boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.75)",
                            }}
                            overflow={"hidden"}
                        >
                            <Image
                                alt="dome"
                                src="/img/dome.png"
                                width={300}
                                height={300}
                                style={{
                                    transform: "translate(-50px, -90px)",
                                }}
                                objectFit="cover"
                            />
                        </Box>
                    </Box>
                </AnimatedInView>
                <Box position="absolute" bottom={-100} left={80} textAlign={"left"}>
                    <AnimatedInView
                        changes={[{ keyName: "opacity", initial: 0, end: 1 }]}
                        threshold={1}
                        triggerOnce
                    >
                        <Typography
                            variant="h4"
                            fontFamily={"MichromaRegular"}
                            fontSize={20}
                            color={"secondary"}
                        >
                            2 lieux
                        </Typography>
                        <Typography
                            variant="h4"
                            fontFamily={"MichromaRegular"}
                            fontSize={20}
                            color={"secondary"}
                        >
                            d&apos;épreuve
                        </Typography>
                    </AnimatedInView>
                </Box>
            </Box>
        </Box>
    );
};

export default Floors;
