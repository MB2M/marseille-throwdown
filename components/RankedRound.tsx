import {
    TableContainer,
    Table,
    TableRow,
    TableCell,
    TableBody,
} from "@mui/material";
import { Box } from "@mui/system";
import { useMemo } from "react";

const STATE_COLOR_GRID = {
    Q: "#FFD600",
    D: "#05c1de",
    DQ: "#fd1085",
    W: "#ffe8a7",
    E: "white",
    R: "lightgray",
};

const RankedRound = ({
    heats,
    byPoints = false,
}: {
    heats: Round["heats"];
    byPoints: boolean;
}) => {
    const sortedHeat = useMemo(() => {
        const newResults = (a: { result: string }, b: { result: string }) => {
            if (a.result.includes(":") && !b.result.includes(":")) return -1;
            if (b.result.includes(":") && !a.result.includes(":")) return 1;
            if (!a.result.includes(":") && !b.result.includes(":"))
                return Number(b.result) - Number(a.result);
            return (
                Number(a.result.replace(":", "")) -
                Number(b.result.replace(":", ""))
            );
        };

        let results = Object.values(heats)
            .flatMap((heat) =>
                Object.values(heat.results).map((result) => result)
            )
            .sort(newResults);
        if (byPoints) {
            results = [...new Set(results.map((r) => r.participant))].map(
                (p) => {
                    // console.log(results)
                    const pointsSum = results
                        .filter((r) => r.participant === p)
                        .reduce((p, c) => p + (c.points || 0), 0);
                    return {
                        participant:
                            results.find((r) => r.participant === p)
                                ?.participant || "",
                        // station:
                        //     results.find((r) => r.participant === p)
                        //         ?.station || 1,
                        result: pointsSum.toString(),
                        state: "D",
                    };
                }
            );
        }
        return results;
    }, [byPoints, heats]);

    return (
        <TableContainer>
            <Table size="small" aria-label="a dense table">
                <TableBody>
                    {sortedHeat.map((r, i, array) => (
                        <TableRow
                            key={`${i}`}
                            sx={{ backgroundColor: STATE_COLOR_GRID[r.state] }}
                        >
                            <TableCell>
                                {1 +
                                    array.findIndex(
                                        (result) =>
                                            Number(
                                                result.result.replace(":", "")
                                            ) ===
                                            Number(r.result.replace(":", ""))
                                    )}
                            </TableCell>
                            <TableCell>{r.participant.toUpperCase()}</TableCell>
                            <TableCell>{r.result}</TableCell>
                            {/* <TableCell>{r.state}</TableCell> */}
                        </TableRow>
                        // <Box
                        //     key={}
                        //     sx={{ color: STATE_COLOR_GRID[r.state] }}
                        // >
                        //     <li>{`${r.participant?.name} - ${r.result} - state: ${r.state}`}</li>
                        // </Box>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default RankedRound;
