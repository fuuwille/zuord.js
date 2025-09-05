import { BenefitsBody } from "@site/src/components/benefits";
import { Pretext } from "@site/src/components/pretext";
import { ShowcaseInspectorHead, ShowcaseInspectorBody } from "@site/src/components/showcase";
import { tokenModifier } from "@site/src/utils/pretext";
import { code, modifiers } from "./benefits/syncAPI";

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

export const benefits = {
    syncAPI: {
        control: {
            integrate: {
                text: "integrate",
                inspector: {
                    head: <ShowcaseInspectorHead.Detailed content={<Pretext text={`zuord.integrate(base, input)`} modifiers={[tokenModifier.const("zuord")]} />} />,
                    body: <ShowcaseInspectorBody.Trial example={<Pretext text={code.integrate} modifiers={modifiers.integrate} />} value={null} inference={null} />
                }
            }
        }
    }
}