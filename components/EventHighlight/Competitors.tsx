import { Box, Stack, Typography } from "@mui/material";
import AnimatedInView from "../AnimatedInView";
import Image from "next/image";

const Competitors = () => {
    return (
        <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            mt={6}
            gap={2}
        >
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
                        src="/img/horde.png"
                        width={340}
                        height={340}
                        style={{
                            transform: "translate(-104px, -60px)",
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
                <Stack gap={3} pl={2}>
                    <Typography
                        fontFamily={"MichromaRegular"}
                        fontSize={20}
                        color={"secondary"}
                    >
                        480 athlètes
                    </Typography>
                    <Typography
                        fontFamily={"NunitoRegular"}
                        fontSize={16}
                        sx={{ color: "white" }}
                    >
                        Pour un maximum de spectacle et de competiton
                    </Typography>
                </Stack>
            </AnimatedInView>
        </Box>
    );
};

export default Competitors;
