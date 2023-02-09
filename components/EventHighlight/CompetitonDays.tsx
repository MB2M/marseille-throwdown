import { Box, Stack, Typography } from "@mui/material";
import AnimatedInView from "../AnimatedInView";
import Image from "next/image";

const CompetitonDays = () => {
    return (
        <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            mt={6}
            gap={2}
        >
            <AnimatedInView
                changes={[{ keyName: "opacity", initial: 0, end: 1 }]}
                threshold={1}
                triggerOnce
            >
                <Stack gap={3}>
                    <Typography
                        fontFamily={"MichromaRegular"}
                        fontSize={20}
                        color={"primary"}
                    >
                        3 jours de compétition
                    </Typography>
                    <Typography
                        fontFamily={"NunitoRegular"}
                        fontSize={16}
                        sx={{ color: "white" }}
                    >
                        Du 28 au 30 Juillet 2023
                    </Typography>
                </Stack>
            </AnimatedInView>
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
                        { keyName: "opacity", initial: 0, end: 1 }
                    ]}
                >
                    <Box
                        position={"relative"}
                        width={131}
                        height={215}
                        sx={{
                            borderRadius: "21px",
                        }}
                        overflow={"hidden"}
                    >
                        <Image
                            alt="dome"
                            src="/img/calendar.png"
                            width={240}
                            height={240}
                            style={{
                                transform: "translate(-54px)",
                            }}
                            objectFit="cover"
                        />
                    </Box>
                </AnimatedInView>
            {/* </Box> */}
        </Box>
    );
};

export default CompetitonDays;
