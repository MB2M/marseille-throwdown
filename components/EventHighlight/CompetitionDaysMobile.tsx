import { Box, Stack, Typography } from "@mui/material";
import AnimatedInView from "../AnimatedInView";
import Image from "next/image";

const CompetitionDaysMobile = () => {
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
                        fontFamily={"strasua"}
                        fontSize={20}
                        color={"primary"}
                    >
                        3 jours de compétition
                    </Typography>
                    <Typography
                        fontFamily={"NunitoRegular"}
                        fontSize={16}
                        sx={{ color: "#A5C3FA" }}
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
                    { keyName: "opacity", initial: 0, end: 1 },
                ]}
            >
                <Box
                    position={"relative"}
                    width={131}
                    height={215}
                    border={"2px solid gray"}
                    sx={{
                        borderRadius: "21px",
                        boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.75)",
                    }}
                    overflow={"hidden"}
                >
                    <Image
                        alt="dome"
                        src="/img/calendar2.jpeg"
                        width={1638/6.8}
                        height={2048/6.8}
                        style={{
                            transform: "translate(-54px, -40px)",
                            objectFit:"cover"
                        }}
                    />
                </Box>
            </AnimatedInView>
            {/* </Box> */}
        </Box>
    );
};

export default CompetitionDaysMobile;
