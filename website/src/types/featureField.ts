export interface FeatureFieldProps {
    layoutText: string;
    passiveText: string;
    activeText: string;

    monitor?: FeatureFieldMonitor;
    className?: string;
    enterDelay?: number;
    leaveDelay?: number;
    enterNextDelay?: number;
    enableFocus?: boolean;
}

export interface FeatureFieldMonitor {
    node: React.ReactNode;
    offset?: [number, number];
}