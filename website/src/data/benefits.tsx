import { BenefitsSyncAPI } from "@site/src/components/benefits/syncAPI";

export const benefits = {
    syncAPI: {
        head: {
            title: "Runtime & Type Harmony",
            description: "Experience APIs that are in sync between runtime and type level",
        },
        content: <BenefitsSyncAPI />
    },
    zeroRuntime: {
        head: {
            title: "Zero runtime overhead",
            description: "Zuord aims to provide a compiler experience that perfectly aligns with runtime behavior, without any runtime overhead."
        }
    }
}