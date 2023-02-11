import { Box, Stack, Typography } from "@mui/material";
import AnimatedInView from "../AnimatedInView";
import Image from "next/image";

const Competitors = () => {
    return (
        <Box>
            <Box
                position="relative"
                top={50}
                right={-60}
                zIndex={1}
                textAlign={"center"}
            >
                <Typography
                    variant="h4"
                    fontFamily={"MichromaRegular"}
                    fontSize={20}
                    color={"secondary"}
                >
                    480 athlètes
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
                        width={226}
                        height={147}
                        sx={{
                            borderRadius: "21px",
                        }}
                        overflow={"hidden"}
                    >
                        <Image
                            alt="horde"
                            src="/img/horde.png"
                            fill
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
                            // textAlign={"end"}
                            sx={{ color: "#A5C3FA" }}
                            width={140}
                        >
                            pour un maximum de spectacle et de compétition
                        </Typography>
                     
                    </Stack>
                </AnimatedInView>
                {/* </Box> */}
            </Box>
        </Box>
    );
};

export default Competitors;