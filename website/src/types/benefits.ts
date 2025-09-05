import { ShowcaseControlData } from '@site/src/types/showcase';

export type BenefitsProps = {
    head: React.FC;
    body?: React.FC;
};

export namespace BenefitsHeadProps {
    export type Base = {
    }

    export type Native = BenefitsHeadProps.Base & {
        title?: string;
        description?: string;
    };
}

export namespace BenefitsBody {
    export namespace SyncAPI {
        export type ControlData = {
            text: string;
            inspector: ShowcaseControlData['inspector'];
        }
    }
}