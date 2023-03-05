import { Box, Stack, Typography } from "@mui/material";
import AnimatedInView from "../AnimatedInView";
import Image from "next/image";

const Volunteers = () => {
    return (
        <Box>
            <Stack
                position="relative"
                top={85}
                right={-110}
                zIndex={0}
                textAlign={"center"}
            >
                <Typography variant="h4Strasua" color={"primary"}>
                    Près de 150
                </Typography>
                <Typography
                    position={"relative"}
                    top={-10}
                    left={60}
                    variant="h4Strasua"
                    color={"primary"}
                >
                    volontaires
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
                            alt="volunteers"
                            src="/img/volunteers2.jpeg"
                            width={2028 /2.5}
                            height={1152 /2.5}
                            style={{
                                transform: "translate(-50px,-200px)",objectFit:"cover"
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
                            fontSize={16}
                            sx={{ color: "#A5C3FA" }}
                        >
                            Prêt à tout
                        </Typography>
                        <Typography
                            variant="h6"
                            fontFamily={"NunitoRegular"}
                            fontSize={16}
                            sx={{ color: "#A5C3FA" }}
                        >
                            donner
                        </Typography>
                    </Stack>
                </AnimatedInView>
                {/* </Box> */}
            </Box>
        </Box>
    );
};

export default Volunteers;
