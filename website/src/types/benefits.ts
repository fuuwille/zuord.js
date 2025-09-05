import { ShowcaseControlData } from '@site/src/types/showcase';

export type BenefitsProps = {
    head: {
        title?: string;
        description?: string;
    }
    content?: React.ReactNode;
};

export namespace BenefitsBody {
    export namespace SyncAPI {
        export type ControlData = {
            text: string;
            inspector: ShowcaseControlData['inspector'];
        }
    }
}