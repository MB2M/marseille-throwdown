import { Table, TableRow, TableCell, TableContainer } from "@mui/material";
import { useMemo } from "react";

const STATE_COLOR_GRID = {
    Q: "#FFD600",
    D: "#05c1de",
    DQ: "#fd1085",
    W: "#ffe8a7",
    E: "white",
    R: "lightgray",
};

const HeatTable = ({ heat }: { heat: Heat }) => {
    const sortResult = (
        a: [key: string, value: Result],
        b: [key: string, value: Result]
    ) => {
        if (a[1].result.includes(":") && !b[1].result.includes(":")) return -1;
        if (b[1].result.includes(":") && !a[1].result.includes(":")) return 1;
        if (!a[1].result.includes(":") && !b[1].result.includes(":"))
            return Number(b[1].result) - Number(a[1].result);
        return (
            Number(a[1].result.replace(":", "")) -
            Number(b[1].result.replace(":", ""))
        );
    };

    return (
        <TableContainer>
            <Table>
                {Object.entries(heat.results)
                    .sort(sortResult)
                    .map(([key, result], index) => (
                        <TableRow
                            key={key}
                            sx={{
                                backgroundColor: STATE_COLOR_GRID[result.state],
                            }}
                        >
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{result.participant}</TableCell>
                            <TableCell>{result.result}</TableCell>
                        </TableRow>
                    ))}
            </Table>
        </TableContainer>
    );
};

export default HeatTable;
