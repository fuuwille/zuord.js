import { ShowcaseControlData } from '@site/src/types/showcase';

export type BenefitsProps = {
    head: BenefitsHead.Base
    body?: React.FC;
};

export namespace BenefitsHead {
    export type Base = {
    }

    export type Native = BenefitsHead.Base & {
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