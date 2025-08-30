export interface FeatureFieldProps {
    tooltip?: React.ReactNode;
    layoutText: string;
    passiveText: string;
    activeText: string;
    className?: string;
    enterDelay?: number;
    leaveDelay?: number;
    enterNextDelay?: number;
    enableFocus?: boolean;
}