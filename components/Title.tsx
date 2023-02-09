import { Typography } from "@mui/material";
import { useTrail, a, useInView } from "@react-spring/web";
import { useState } from "react";

const text = "WHO WILL BE THE FITTEST ON MARS ?";

const Title = () => {
    // const [visible, setVisible] = useState(true);
    const [ref, inView] = useInView();

    const trail = useTrail(text.length, {
        config: { mass: 5, tension: 3000, friction: 200 },
        opacity: inView ? 1 : 0,
        x: inView ? 0 : 20,
        height: inView ? 200 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    });

    return (
        <Typography
            color={"primary"}
            fontFamily={"MichromaRegular"}
            fontSize={32}
            textAlign={"end"}
            ref={ref}
        >
            {trail.map(({ height, ...style }, index) => (
                <a.span key={index} style={{ height, ...style }}>
                    {text[index]}
                </a.span>
            ))}
        </Typography>
    );
};

export default Title;
