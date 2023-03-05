import { Box, Stack, Typography } from "@mui/material";
import AnimatedInView from "../AnimatedInView";
import Image from "next/image";

const CompetitionDays = () => {
    return (
        <Box>
            <Stack
                position="relative"
                top={70}
                right={-60}
                zIndex={0}
                textAlign={"center"}
            >
                <Typography variant="h4Strasua" color={"primary"}>
                    3 jours de
                </Typography>
                <Typography
                    position={"relative"}
                    top={-10}
                    left={70}
                    variant="h4Strasua"
                    color={"primary"}
                >
                    compétition
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
                            alt="dome"
                            src="/img/calendar2.jpeg"
                            width={1638 / 6}
                            height={2048 / 6}
                            style={{
                                transform: "translate(-20px,-140px)",
                                objectFit: "cover",
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
