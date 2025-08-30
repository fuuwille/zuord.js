export interface FeatureFieldProps {
    text: FeatureFieldText;
    monitor?: FeatureFieldMonitor;
    className?: string;
    enableFocus?: boolean;
}

export interface FeatureFieldText {
    layout: string;
    passive: string;
    active: string;
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