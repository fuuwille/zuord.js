import { BenefitsBody } from "@site/src/components/benefits";

export const benefitsBody = {
    syncAPI: {
        head: {
            title: "Sync Runtime & Type APIs",
            description: "Experience APIs synchronized between runtime behavior and type system.",
        },
        content: <BenefitsBody.SyncAPI />
    },
    zeroCostRT: {
        head: {
            title: "Zero-Cost Return Types",
            description: "Return types fully managed by the compiler, with zero runtime cost.",
        },
        content: <BenefitsBody.ZeroCostRT />
    }
}