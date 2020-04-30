import React from 'react';
import raf from 'raf';

interface FormatFn {
    (value: number): string | number;
}

interface Props extends React.HTMLAttributes<HTMLElement> {
    number: number;
    initial?: number;
    fps?: number;
    duration?: number;
    format?: FormatFn;
    component?: string;
}

const AnimatedNumber: React.FC<Props> = (props: Props): React.ReactElement => {
    const {
        number,
        initial = 0,
        fps = 60,
        duration = 250,
        format,
        component: C = 'p',
        ...rest
    } = props;

    const [value, setValue] = React.useState<number>(initial);
    const previousValue = React.useRef<number>(initial);

    const lastTimestamp = React.useRef<number>(0);
    const startTimestamp = React.useRef<number>(0);

    const handle = React.useRef<number>();

    const shouldProcess = (timestamp: number): boolean =>
        !lastTimestamp.current ||
        timestamp - lastTimestamp.current > 1000 / fps;

    const animate = (timestamp: number, reset?: boolean): void => {
        if (!shouldProcess(timestamp)) {
            handle.current = raf(animate);
            return;
        }

        const pValue = reset ? value : previousValue.current;
        const sTimestamp = reset ? timestamp : startTimestamp.current;

        let nextValue: number;
        if (timestamp - sTimestamp >= duration) {
            nextValue = number; // We are at time, just finish
        } else {
            const gap = number - pValue;
            const pctDuration = (timestamp - sTimestamp) / duration;

            nextValue = pValue + gap * pctDuration;
        }

        if (nextValue === number) {
            endAnimation();
            setValue(nextValue);
        } else {
            setValue(nextValue);
            previousValue.current = pValue;

            startTimestamp.current = sTimestamp;
            lastTimestamp.current = timestamp;

            handle.current = raf(animate);
        }
    };

    const startAnimation = (): void => {
        handle.current = raf(timestamp => {
            animate(timestamp, true);
        });
    };

    const endAnimation = (): void => {
        if (handle.current) raf.cancel(handle.current);
    };

    React.useEffect(() => {
        startAnimation();

        return () => endAnimation();
    }, []);

    React.useEffect(() => {
        endAnimation();
        startAnimation();
    }, [number]);

    return <C {...rest}>{format ? format(value) : value}</C>;
};

export default AnimatedNumber;
