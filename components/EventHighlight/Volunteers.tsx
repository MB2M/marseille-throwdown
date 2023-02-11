import { Box, Stack, Typography } from "@mui/material";
import AnimatedInView from "../AnimatedInView";
import Image from "next/image";

const Volunteers = () => {
    return (
        <Box>
            <Box
                position="relative"
                top={85}
                right={-125}
                zIndex={1}
                textAlign={"center"}
            >
                <Typography
                    variant="h4"
                    fontFamily={"MichromaRegular"}
                    fontSize={20}
                    color={"primary"}
                >
                    Près de 150
                </Typography>
                <Typography
                    position={"relative"}
                    left={50}
                    variant="h4"
                    fontFamily={"MichromaRegular"}
                    fontSize={20}
                    color={"primary"}
                >
                    bénévoles
                </Typography>
            </Box>
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
                        sx={{
                            borderRadius: "21px",
                        }}
                        overflow={"hidden"}
                    >
                        <Image
                            alt="volunteers"
                            src="/img/volunteers.png"
                            width={226}
                            height={226}
                            style={{
                                transform: "translate(0,-10px)",
                            }}
                            objectFit="cover"
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
