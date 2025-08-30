export interface FeatureFieldProps {
    layoutText: string;
    passiveText: string;
    activeText: string;
    
    monitor?: React.ReactNode;
    className?: string;
    enterDelay?: number;
    leaveDelay?: number;
    enterNextDelay?: number;
    enableFocus?: boolean;
}