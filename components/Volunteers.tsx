import { ChangeEvent, SyntheticEvent, useState } from "react";
import MTModal from "./MTModal";
import {
    Stack,
    Typography,
    TextField,
    Button,
    Box,
    styled,
    MenuItem,
    Select,
    SelectChangeEvent,
    Snackbar,
    Alert,
} from "@mui/material";
import { theme } from "@/styles/themes";

const CustomInputField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "white",
        },
        "&:hover fieldset": {
            borderColor: `${theme.palette.secondary.main} !important`,
        },
    },
    "& .MuiFormLabel-root": {
        color: "white",
    },
    "& .MuiFormLabel-root.Mui-focused": {
        color: "white",
    },
    input: { color: "white" },
});

interface IForm {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    box?: string;
    team1?: string;
    team2?: string;
    tshirtModel?: "homme" | "femme";
    tshirtSize?: string;
    message?: string;
}

type FormField = keyof IForm;

const verifyFields = (form: IForm) => {
    const requiredKeys = [
        "firstName",
        "lastName",
        "email",
        "phone",
        "tshirtModel",
        "tshirtSize",
    ] as Array<keyof IForm>;

    return requiredKeys.filter(
        (key) => !Object.keys(form).includes(key) || form[key] === ""
    );
};

const Volunteers = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [formFields, setFormFields] = useState<IForm>({
        tshirtModel: "homme",
    });
    const [toastOpen, setToastOpen] = useState(false);
    const [missingFields, setMissingFields] = useState<Array<keyof IForm>>([]);

    const handleToastClose = (
        event?: SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === "clickaway") {
            return;
        }

        setToastOpen(false);
    };

    const handleModalClose = () => {
        setModalOpen(false);
        setMissingFields([]);
    };

    const handleButtonClick = () => {
        setModalOpen(true);
    };

    const handleShirtChange = (event: SelectChangeEvent) => {
        setFormFields((current) => ({
            ...current,
            tshirtModel: event.target.value as "homme" | "femme",
        }));
    };

    const handleSendClick = async () => {
        const missingFieds = verifyFields(formFields);

        if (missingFieds.length > 0) return setMissingFields(missingFieds);

        const payload = {
            Prénom: formFields.firstName,
            Nom: formFields.lastName,
            Email: formFields.email,
            Tel: formFields.phone,
            Box: formFields.box,
            Souhait1: formFields.team1,
            Souhait2: formFields.team2,
            tshirt: `${formFields.tshirtModel} - ${formFields.tshirtSize}`,
            ùmessage: formFields.message,
        };

        try {
            const response = await fetch("/api/volunteer", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });
            if (response.ok) {
                handleModalClose();
                setToastOpen(true);
            }
        } catch (err: any) {
            console.log(err);
        }
    };

    const handleFieldChange =
        (field: FormField) => (event: ChangeEvent<HTMLInputElement>) => {
            setFormFields((current) => ({
                ...current,
                [field]: event.target.value,
            }));
            if (missingFields.includes(field)) {
                setMissingFields((current) => {
                    current.splice(current.indexOf(field), 1);

                    return current;
                });
            }
        };

    return (
        <>
            <Snackbar
                open={toastOpen}
                autoHideDuration={6000}
                onClose={handleToastClose}
            >
                <Alert
                    onClose={handleToastClose}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    Votre candidature a bien été envoyée!
                </Alert>
            </Snackbar>
            <MTModal open={modalOpen} onClose={handleModalClose}>
                <Stack
                    component="form"
                    width={1}
                    spacing={2}
                    sx={{
                        "& .MuiTextField-root": {
                            m: 1,
                            width: "25ch",
                            color: "white",
                        },
                    }}
                >
                    <Typography color="white" textAlign={"center"}>
                        Merci de remplir ce formulaire:
                    </Typography>
                    <Box>
                        <Typography color={"primary"}>
                            Vos coordonnées:
                        </Typography>
                        <Box sx={{ display: { lg: "flex" } }}>
                            <CustomInputField
                                color="primary"
                                label={"Prénom"}
                                variant={"outlined"}
                                size="small"
                                onChange={handleFieldChange("firstName")}
                                error={missingFields.includes("firstName")}
                                required
                            />
                            <CustomInputField
                                color="primary"
                                label={"Nom"}
                                size="small"
                                variant={"outlined"}
                                onChange={handleFieldChange("lastName")}
                                error={missingFields.includes("lastName")}
                                required
                            />
                        </Box>
                        <Box sx={{ display: { lg: "flex" } }}>
                            <CustomInputField
                                color="primary"
                                type="email"
                                label={"Email"}
                                size="small"
                                variant={"outlined"}
                                onChange={handleFieldChange("email")}
                                error={missingFields.includes("email")}
                                required
                            />
                            <CustomInputField
                                color="primary"
                                type="tel"
                                label={"Téléphone"}
                                size="small"
                                variant={"outlined"}
                                onChange={handleFieldChange("phone")}
                                error={missingFields.includes("phone")}
                                required
                            />
                        </Box>
                        <Box sx={{ display: { lg: "flex" } }}>
                            <CustomInputField
                                color="primary"
                                label={"Box actuelle"}
                                size="small"
                                variant={"outlined"}
                                onChange={handleFieldChange("box")}
                            />
                        </Box>
                    </Box>
                    <Box>
                        <Typography color={"primary"}>
                            Souhait d&apos;équipe:
                        </Typography>
                        <Box sx={{ display: { lg: "flex" } }}>
                            <CustomInputField
                                color="primary"
                                label={"Choix 1"}
                                size="small"
                                variant={"outlined"}
                                onChange={handleFieldChange("team1")}
                            />
                            <CustomInputField
                                color="primary"
                                label={"Choix 2"}
                                size="small"
                                variant={"outlined"}
                                onChange={handleFieldChange("team2")}
                            />
                        </Box>
                    </Box>
                    <Box>
                        <Typography color={"primary"}>T-shirt:</Typography>
                        <Box sx={{ display: { lg: "flex" } }}>
                            <Box>
                                <Select
                                    id="shirt-modele-select"
                                    value={formFields?.tshirtModel}
                                    size="small"
                                    color="primary"
                                    label="Modèle"
                                    onChange={handleShirtChange}
                                    sx={{
                                        color: "white",
                                        borderColor: "white",
                                    }}
                                    error={missingFields.includes(
                                        "tshirtModel"
                                    )}
                                    required
                                >
                                    <MenuItem value={"homme"}>Homme</MenuItem>
                                    <MenuItem value={"femme"}>Femme</MenuItem>
                                </Select>
                            </Box>
                            <CustomInputField
                                color="primary"
                                label={"Taille"}
                                size="small"
                                variant={"outlined"}
                                onChange={handleFieldChange("tshirtSize")}
                                error={missingFields.includes("tshirtSize")}
                                required
                            />
                        </Box>
                    </Box>
                    <Box>
                        <Box sx={{ display: { lg: "flex" } }}>
                            <CustomInputField
                                multiline
                                
                                rows={3}
                                color="primary"
                                label={"Message"}
                                size="small"
                                variant={"outlined"}
                                onChange={handleFieldChange("message")}
                                inputProps={{sx:{color:"white"}}}
                            />
                        </Box>
                    </Box>
                    <Box justifyContent={"end"} display={"flex"} gap={2}>
                        <Button color={"primary"} onClick={handleModalClose}>
                            Annuler
                        </Button>
                        <Button
                            variant="contained"
                            color={"primary"}
                            onClick={handleSendClick}
                        >
                            Envoyer
                        </Button>
                    </Box>
                </Stack>
            </MTModal>
            <Button
                variant="contained"
                color="primary"
                sx={{ color: "black" }}
                onClick={handleButtonClick}
            >
                Contactez-nous
            </Button>
        </>
    );
};

export default Volunteers;
