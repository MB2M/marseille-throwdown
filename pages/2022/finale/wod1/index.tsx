import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent,
    Container,
    Typography,
    FormLabel,
    Button,
    Box,
} from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getTournaments } from "../../../../lib";

const Tournament = () => {
    const [tournaments, setTournaments] = useState<Tournament[]>([]);
    useEffect(() => {
        (async () => {
            await getTournaments(setTournaments);
        })();
    }, []);

    return (
        <Container>
            <Typography fontSize="40px" textAlign="center">
                Marseille Throwdown wod1
            </Typography>
            <h4>Select a category :</h4>
            <Box display="flex" flexDirection="column" gap={2}>
                {tournaments.map((tournament) => (
                    <Button key={tournament.id} variant="outlined">
                        <Link href={`./wod1/${tournament.id}`}>
                            {tournament.name}
                        </Link>
                    </Button>
                ))}
            </Box>
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
