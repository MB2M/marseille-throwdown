import { Box, Stack, Typography } from "@mui/material";
import AnimatedInView from "../AnimatedInView";
import Image from "next/image";

const Team = () => {
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
                        fontFamily={"Strasua"}
                        fontSize={20}
                        color={"secondary"}
                    >
                        Equipes
                    </Typography>
                    <Typography
                        variant="h6"
                        fontFamily={"NunitoRegular"}
                        sx={{ color: "#A5C3FA" }}
                    >
                        21 Mai - 11 Juin
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
                        boxShadow: "3px 3px 5px black",
                    }}
                    overflow={"hidden"}
                >
                    <Image
                        alt="dome"
                        src="/img/team2.jpeg"
                        width={982 / 5}
                        height={2048 / 5}
                        style={{
                            transform: "translate(-0px, -30px)",
                        }}
                        objectFit="contain"
                    />
                </Box>
            </AnimatedInView>
        </Box>
    );
};

export default Team;
