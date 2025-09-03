import { SyncAPI as BenefitSyncAPI } from "@site/src/contents/benefits/syncAPI";

export const benefitCards = [
    {
        head: {
            title: "Runtime & Type Harmony",
            description: "Experience APIs that are in sync between runtime and type level",
        },
        content: <BenefitSyncAPI />
    },
    {
        head: {
            title: "Zero runtime overhead",
            description: "Zuord aims to provide a compiler experience that perfectly aligns with runtime behavior, without any runtime overhead."
        }
    }
]