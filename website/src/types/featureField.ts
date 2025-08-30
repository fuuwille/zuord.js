export interface FeatureFieldProps {
    layoutText: string;
    passiveText: string;
    activeText: string;

    monitor?: FeatureFieldMonitor;
    className?: string;
    enableFocus?: boolean;
}

export interface FeatureFieldMonitor {
    node?: React.ReactNode;
    delay?: FeatureFieldMonitorDelay;
    offset?: [number, number];
}

export interface FeatureFieldMonitorDelay {
    enter?: number;
    leave?: number;
    enterNext?: number;
}