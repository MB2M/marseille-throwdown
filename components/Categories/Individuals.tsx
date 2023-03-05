import {
    Box,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import AnimatedInView from "../AnimatedInView";
import styled from "@emotion/styled";
import { TableBar } from "@mui/icons-material";
import { CustomTableCell } from "./StyledCustomTable";

const list = [
    {
        image: "elite_2.jpg",
        label: "Elite",
        text: "Homme & Femme",
        men: 31,
        women: 15,
    },
    {
        image: "master35_2.jpeg",
        label: "Master 35",
        text: "Homme & Femme",
        men: 16,
        women: 8,
    },
    {
        image: "master40_2.jpeg",
        label: "Master 40",
        text: "Homme & Femme",
        men: 16,
        women: 8,
    },
    {
        image: "espoir_2.jpeg",
        label: "Espoir",
        text: "Homme & Femme",
        men: 8,
        women: 8,
    },
    {
        image: "teen_2.jpeg",
        label: "Teen",
        text: "Garçon & Fille",
        men: 8,
        women: 8,
    },
    {
        image: "adaptive.jpeg",
        label: "Adaptive",
        text: "Mixte",
    },
];

const Individuals = () => {
    return (
        <>
            <Grid2
                container
                spacing={8}
                justifyContent={"center"}
                alignItems={"center"}
            >
                {list.map((category) => (
                    <Grid2
                        key={category.label}
                        xs={12}
                        md={6}
                        xl={4}
                        textAlign={"center"}
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                    >
                        <AnimatedInView
                            changes={[
                                { keyName: "opacity", initial: 0, end: 1 },
                                {
                                    keyName: "x",
                                    initial: 20,
                                    end: 0,
                                },
                            ]}
                            threshold={0.7}
                            triggerOnce
                        >
                            <Stack alignItems={"center"} spacing={2}>
                                <Box
                                    borderRadius={"100%"}
                                    overflow={"hidden"}
                                    position={"relative"}
                                    height={265}
                                    width={265}
                                    border={"2px solid gray"}
                                    sx={{
                                        boxShadow:
                                            "4px 4px 4px rgba(0, 0, 0, 0.75)",
                                    }}
                                >
                                    <Image
                                        src={`/img/${category.image}`}
                                        alt={category.image}
                                        style={{
                                            transform: "translate(-0px, 0px)",
                                        }}
                                        fill
                                        objectFit="cover"
                                    />
                                </Box>
                                <Typography
                                    color="secondary"
                                    // fontFamily={"MichromaRegular"}
                                    variant="h4Strasua"
                                >
                                    {category.label}
                                </Typography>
                                <Typography
                                    sx={{ color: "#A5C3FA" }}
                                    fontFamily={"NunitoBlack"}
                                    variant="h5"
                                >
                                    {category.text}
                                </Typography>
                            </Stack>
                        </AnimatedInView>
                    </Grid2>
                ))}
            </Grid2>
            <Stack my={4} alignItems={"center"}>
                <Typography
                    variant="h5"
                    color={"primary"}
                    // sx={{ color: "#A5C3FA" }}
                    textAlign={"center"}
                >
                    Nombre de qualifiés
                </Typography>
                <TableContainer sx={{ maxWidth: 600, width: "1hw" }}>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <CustomTableCell></CustomTableCell>
                                <CustomTableCell>Homme</CustomTableCell>
                                <CustomTableCell>Femme</CustomTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{ color: "#A5C3FA" }}>
                            {list.slice(0, -1).map((category) => (
                                <TableRow
                                    key={category.label}
                                    sx={{ color: "#A5C3FA" }}
                                >
                                    <CustomTableCell>
                                        {category.label}
                                    </CustomTableCell>
                                    <CustomTableCell>
                                        {category.men}
                                    </CustomTableCell>
                                    <CustomTableCell>
                                        {category.women}
                                    </CustomTableCell>
                                </TableRow>
                            ))}
                            <TableRow>
                                <CustomTableCell>Adaptive</CustomTableCell>
                                <CustomTableCell
                                    colSpan={2}
                                    sx={{ textAlign: "center" }}
                                >
                                    16
                                    <br />
                                    (Pas de qualification)
                                </CustomTableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Stack>
        </>
    );
};

export default Individuals;
