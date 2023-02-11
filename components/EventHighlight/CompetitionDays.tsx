import { Box, Stack, Typography } from "@mui/material";
import AnimatedInView from "../AnimatedInView";
import Image from "next/image";

const CompetitionDays = () => {
    return (
        <Box>
            <Box
                position="relative"
                top={70}
                right={-60}
                zIndex={1}
                textAlign={"center"}
            >
                <Typography
                    variant="h4"
                    fontFamily={"MichromaRegular"}
                    fontSize={20}
                    color={"primary"}
                >
                    3 jours de
                </Typography>
                <Typography
                    position={"relative"}
                    left={50}
                    variant="h4"
                    fontFamily={"MichromaRegular"}
                    fontSize={20}
                    color={"primary"}
                >
                    compétition
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
                            alt="dome"
                            src="/img/calendar.png"
                            width={226}
                            height={226}
                            style={{
                                transform: "translate(0,0px)",
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
                            Du 28 au
                        </Typography>
                        <Typography
                            variant="h6"
                            fontFamily={"NunitoRegular"}
                            fontSize={16}
                            sx={{ color: "#A5C3FA" }}
                        >
                            30 Juillet
                        </Typography>
                        <Typography
                            variant="h6"
                            fontFamily={"NunitoRegular"}
                            fontSize={16}
                            sx={{ color: "#A5C3FA" }}
                        >
                            2023
                        </Typography>
                    </Stack>
                </AnimatedInView>
                {/* </Box> */}
            </Box>
        </Box>
    );
};

export default CompetitionDays;
