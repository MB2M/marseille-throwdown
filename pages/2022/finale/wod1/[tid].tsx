import {
    Container,
    Typography,
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Table,
    TableRow,
    TableCell,
    Box,
} from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getTournament } from "../../../../lib";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HeatTable from "../../../../components/HeatTable";
import RankedRound from "../../../../components/RankedRound";
import RankedTournament from "../../../../components/RankedTournament";
import mtLogo from "../../../../public/img/logo.png";
import Image from 'next/image'

const Tournament = () => {
    const router = useRouter();
    const { tid: tournamentId } = router.query;
    const [tournament, setTournament] = useState<Tournament | undefined>();

    useEffect(() => {
        (async () => {
            getTournament(tournamentId as string, setTournament);
        })();
    }, [tournamentId]);

    return (
        <Container sx={{ minHeight: "100vh" }}>
            <Box alignItems={"center"} display={"flex"} flexDirection="column">
                <Box width={"100px"} ml={3}>
                    <Image src={mtLogo} layout={"responsive"} alt={""}></Image>
                </Box>

                <Typography fontSize="40px" textAlign="center">
                    Marseille Throwdown wod1
                </Typography>
            </Box>
            {tournament && (
                <>
                    <Typography textAlign="center" variant={"h5"} my={2}>Category {tournament?.name} :</Typography>
                    <div>
                        {Object.entries(tournament.rounds)
                            .sort((a: any, b: any) => {
                                return a[1].customId.localeCompare(
                                    b[1].customId
                                );
                            })
                            .map(([key, round]: any) => (
                                <Accordion
                                    key={key}
                                    sx={{ backgroundColor: "#c1f7ff" }}
                                >
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>{round.name}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        {Object.entries(round.heats)
                                            .sort((a: any, b: any) => {
                                                return a[1].customId.localeCompare(
                                                    b[1].customId
                                                );
                                            })
                                            .map(([key, heat]: any) => (
                                                <Accordion
                                                    key={key}
                                                    sx={{
                                                        backgroundColor:
                                                            "#fdb5d8",
                                                    }}
                                                >
                                                    <AccordionSummary
                                                        expandIcon={
                                                            <ExpandMoreIcon />
                                                        }
                                                        aria-controls="panel1a-content"
                                                        id="panel1a-header"
                                                    >
                                                        <Typography>
                                                            {heat.name} -{" "}
                                                            {new Date(
                                                                heat.date
                                                            ).toLocaleTimeString()}
                                                        </Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <HeatTable
                                                            heat={heat}
                                                        />
                                                    </AccordionDetails>
                                                </Accordion>
                                            ))}
                                        {Object.values(round.heats).length >
                                            1 && (
                                            <Accordion
                                                key={key}
                                                sx={{ backgroundColor: "gray" }}
                                            >
                                                <AccordionSummary
                                                    expandIcon={
                                                        <ExpandMoreIcon />
                                                    }
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                >
                                                    <Typography>
                                                        Overall rank
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <RankedRound
                                                        heats={round.heats}
                                                        byPoints={
                                                            tournament?.name.includes(
                                                                "Team"
                                                            )
                                                                ? true
                                                                : false
                                                        }
                                                    />
                                                </AccordionDetails>
                                            </Accordion>
                                        )}
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        <Accordion sx={{ backgroundColor: "gray" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>Overall rank</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <RankedTournament tournament={tournament} />
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </>
            )}
            {/* <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedTournamentId}
                    label="Category"
                    onChange={handleSelectTournamentChange}
                >
                    {Object.entries(tournaments).map(([key, value]: any) => (
                        <MenuItem key={key} value={value.name}>
                            {value.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl> */}
        </Container>
    );
};

export default Tournament;
