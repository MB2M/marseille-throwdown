import { PropsOf } from "@emotion/react";
import { Box, Modal } from "@mui/material";

const modalStyle = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width: 400,
    bgcolor: "#1b2d5c",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const MTModal = (props: PropsOf<typeof Modal>) => {
    const { children, ...otherProps } = props;

    return (
        <Modal {...otherProps}>
            <Box sx={modalStyle}>{props.children}</Box>
        </Modal>
    );
};

export default MTModal;
