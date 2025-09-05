import { BenefitsBody } from "@site/src/components/benefits";

export const benefitsBody = {
    syncAPI: {
        head: {
            title: "Sync Runtime & Type APIs",
            description: "Experience APIs that are in sync between runtime and type level",
        },
        content: <BenefitsBody.SyncAPI />
    },
    zeroCostRI: {
        head: {
            title: "Zero-Cost Runtime Inference",
            description: "Type inference is compiler-specific and doesn't add overhead to the runtime."
        }
    }
}