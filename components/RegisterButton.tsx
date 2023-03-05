import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import MTModal from "./MTModal";

const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#1b2d5c",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const RegisterButton = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    const handleRegisterClick = () => {
        setOpenModal(true);
    };

    const handleModalClose = () => {
        setOpenModal(false);
    };

    return (
        <>
            <MTModal open={openModal} onClose={handleModalClose}>
                <Stack spacing={2} justifyContent={"center"}>
                    <Typography
                        color={"primary"}
                        fontFamily={"NunitoBlack"}
                        fontSize="1.3rem"
                    >
                        Sélectionnez votre catégorie:
                    </Typography>
                    <Link
                        href={
                            "https://competitioncorner.net/events/9734/details"
                        }
                        target="_blank"
                    >
                        <Button variant="contained" color="secondary">
                            Adaptive
                        </Button>
                    </Link>
                    <Link
                        href={
                            "https://competitioncorner.net/events/9732/details"
                        }
                        target="_blank"
                    >
                        <Button variant="contained" color="secondary">
                            Qualifications en ligne
                        </Button>
                    </Link>
                    <Button onClick={handleModalClose}>Annuler</Button>
                </Stack>
            </MTModal>
            <Button
                variant="contained"
                color="secondary"
                onClick={handleRegisterClick}
                sx={{ color: "black" }}
            >
                S&apos;inscire
            </Button>
        </>
    );
};
export default RegisterButton;
