import { a, useSpring } from "@react-spring/web";
import { PropsWithChildren } from "react";
import { useInView } from "react-intersection-observer";

type Props = PropsWithChildren & {
    changes?: {
        keyName: string;
        initial: number | string;
        end: number | string;
    }[];
    threshold?: number;
    triggerOnce?: boolean;
};

const AnimatedInView = ({
    children,
    changes = [],
    threshold = 0,
    triggerOnce = false,
}: Props) => {
    const [ref, inView] = useInView({
        triggerOnce,
        threshold,
    });

    const springOptions = changes.reduce(
        (p, { keyName, initial, end }) => ({
            ...p,
            [keyName]: inView ? end : initial,
        }),
        {}
    );

    const springs = useSpring({ ...springOptions });

    return (
        <a.div ref={ref} style={springs}>
            {children}
        </a.div>
    );
};

export default AnimatedInView;
