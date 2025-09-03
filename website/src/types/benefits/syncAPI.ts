import { ShowcaseControlData } from '@site/src/types/showcase';
import { Zuord } from 'zuord';

export type SyncAPIControlData = {
    text: string;
    inspector: Zuord.Pick<ShowcaseControlData, { inspector: true }>;
}