import { Box, Stack, Typography } from "@mui/material";
import AnimatedInView from "../AnimatedInView";
import Image from "next/image";

const VolunteersMobile = () => {
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
                <Stack gap={3} pl={2}>
                    <Typography
                        fontFamily={"strasua"}
                        fontSize={20}
                        color={"primary"}
                    >
                        Près de 150 volontaires
                    </Typography>
                    <Typography
                        fontFamily={"NunitoRegular"}
                        fontSize={16}
                        sx={{ color: "#A5C3FA" }}
                    >
                        Prêt à tout donner
                    </Typography>
                </Stack>
            </AnimatedInView>
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
                        alt="volunteers"
                        src="/img/volunteers_mobile.jpeg"
                        width={1366 / 7}
                        height={2048 / 7}
                        style={{
                            transform: "translate(-30px, -20px)",
                            objectFit: "contain",
                        }}
                    />
                </Box>
            </AnimatedInView>
        </Box>
    );
};

export default VolunteersMobile;
