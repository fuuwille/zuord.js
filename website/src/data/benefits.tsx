import { BenefitsBody } from "@site/src/components/benefits";

export const benefitsBody = {
    syncAPI: {
        head: {
            title: "Sync Runtime & Type APIs",
            description: "Experience APIs that are in sync between runtime and type level",
        },
        content: <BenefitsBody.SyncAPI />
    },
    zeroRuntime: {
        head: {
            title: "Zero runtime overhead",
            description: "Zuord aims to provide a compiler experience that perfectly aligns with runtime behavior, without any runtime overhead."
        }
    }
}