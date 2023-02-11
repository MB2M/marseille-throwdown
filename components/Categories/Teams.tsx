import {
    Box,
    Stack,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import AnimatedInView from "../AnimatedInView";
import { CustomTableCell } from "./StyledCustomTable";

const qualified = [
    {
        name: "Elite",
        men: 15,
        women: 15,
        mixte: "-",
    },
    {
        name: "Rx",
        men: 15,
        women: 15,
        mixte: "-",
    },
    {
        name: "Scaled",
        men: 15,
        women: 15,
        mixte: "-",
    },
    {
        name: "Master 85",
        men: 15,
        women: 8,
        mixte: 8,
    },
];

const list = [
    {
        image: ["elite.png", "elite.png"],
        label: "Femme / Femme",
        text: ["Elite", "Rx", "Scaled", "Master 85"],
        Men: 15,
        Women: 15,
        Miste: "-",
    },
    {
        image: ["elite_men.png", "elite_men.png"],
        label: "Homme / Homme",
        text: ["Elite", "Rx", "Scaled", "Master 85"],
        Men: 15,
        Women: 15,
        Miste: "-",
    },
    {
        image: ["elite_men.png", "elite.png"],
        label: "Homme / Femme",
        text: ["Master 85"],
        Men: 15,
        Women: 15,
        Miste: "-",
    },
];

const Teams = () => {
    return (
        <>
            <Grid2
                container
                spacing={8}
                justifyContent={"center"}
                alignItems={"flex-start"}
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
                            <Stack alignItems={"center"}>
                                <Box display="flex">
                                    {category.image.map((image, index) => (
                                        <Box
                                            key={index}
                                            borderRadius={"100%"}
                                            overflow={"hidden"}
                                            position={"relative"}
                                            left={index % 2 ? -30 : 30}
                                            height={185}
                                            width={185}
                                            zIndex={index % 2 ? 0 : 1}
                                            boxShadow={"4px 4px 4px #000000bb"}
                                        >
                                            {image.includes("men") ? (
                                                <Image
                                                    src={`/img/${image}`}
                                                    alt={image}
                                                    width={500}
                                                    height={500}
                                                    style={{
                                                        transform:
                                                            "translate(-170px, 0px)",
                                                    }}
                                                />
                                            ) : (
                                                <Image
                                                    src={`/img/${image}`}
                                                    alt={image}
                                                    fill
                                                />
                                            )}
                                        </Box>
                                    ))}
                                    {/* // <Box
            //     borderRadius={"100%"}
            //     overflow={"hidden"}
            //     position={"relative"}
            //     left={30}
            //     height={185}
            //     width={185}
            //     zIndex={1}
            //     boxShadow={"4px 4px 4px #000000bb"}
            // >
            //     <Image
            //         src={`/img/${category.image[0]}`}
            //         alt={category.image[0]}
            //         fill
            //     />
            // </Box>
            // <Box
            //     borderRadius={"100%"}
            //     overflow={"hidden"}
            //     position={"relative"}
            //     left={-30}
            //     height={185}
            //     width={185}
            // >
            //     {category.name.includes("men")} ?
            //     <Image
            //         src={`/img/${category.image[1]}`}
            //         alt={category.image[1]}
            //         // fill
            //         width={500}
            //         height={500}
            //         style={{
            //             transform: "translate(-170px, 0px)",
            //         }}
            //     />:
            //     <Image
            //         src={`/img/${category.image[1]}`}
            //         alt={category.image[1]}
            //         fill
            //     />}
            // </Box> */}
                                </Box>
                                <Typography
                                    color="secondary"
                                    fontFamily={"MichromaRegular"}
                                    variant="h4"
                                >
                                    {category.label}
                                </Typography>
                                {category.text.map((field, index) => (
                                    <Typography
                                        key={index}
                                        sx={{ color: "#A5C3FA" }}
                                        fontFamily={"MichromaRegular"}
                                        variant="h5"
                                    >
                                        {field}
                                    </Typography>
                                ))}
                            </Stack>
                        </AnimatedInView>
                    </Grid2>
                ))}
            </Grid2>
            <Stack my={6} alignItems={"center"} spacing={2}>
                <Typography
                    variant="h5"
                    sx={{ color: "#A5C3FA" }}
                    textAlign={"center"}
                >
                    Nombre de qualifiés
                </Typography>
                <TableContainer sx={{ maxWidth: "600px" }}>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <CustomTableCell></CustomTableCell>
                                <CustomTableCell>Hommes</CustomTableCell>
                                <CustomTableCell>Femmes</CustomTableCell>
                                <CustomTableCell>Mixte</CustomTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{ color: "#A5C3FA" }}>
                            {qualified.map((category) => (
                                <TableRow
                                    key={category.name}
                                    sx={{ color: "#A5C3FA" }}
                                >
                                    <CustomTableCell>
                                        {category.name}
                                    </CustomTableCell>
                                    <CustomTableCell>
                                        {category.men}
                                    </CustomTableCell>
                                    <CustomTableCell>
                                        {category.women}
                                    </CustomTableCell>
                                    <CustomTableCell>
                                        {category.mixte}
                                    </CustomTableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Stack>
        </>
    );
};

export default Teams;
