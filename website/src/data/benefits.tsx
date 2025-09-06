import { BenefitsBody, BenefitsHead } from "@site/src/components/benefits";
import { Pretext } from "@site/src/components/pretext";
import { ShowcaseInspectorHead, ShowcaseInspectorBody } from "@site/src/components/showcase";
import { tokenModifier } from "@site/src/utils/pretext";
import { benefitsBodyUtil } from "../utils/benefits";
import * as syncAPI from "@site/src/data/benefitsSyncAPI";

export const benefitsData = {
    syncAPI: {
        head: () => <BenefitsHead.Native title={"Sync Runtime & Type APIs"} description={"Experience APIs synchronized between runtime behavior and type system."} />,
        body: () => <BenefitsBody.SyncAPI />
    },
    zeroCostRT: {
        head: () => <BenefitsHead.Native title={"Zero-Cost Return Types"} description={"Return types fully managed by the compiler, with zero runtime cost."} />,
        body: () => <BenefitsBody.ZeroCostRT />
    }
}

export const benefitsBodyData = {
    syncAPI: {
        control: {
            integrate: benefitsBodyUtil.syncAPI.control({
                text: "integrate",
                inspector: {
                    head: <ShowcaseInspectorHead.Detailed content={<Pretext text={`zuord.integrate(base, input)`} modifiers={[tokenModifier.const("zuord")]} />} />,
                    body: <ShowcaseInspectorBody.Content example={syncAPI.inspector.body.example.integrate} value={null} inference={null} />
                }
            })
        }
    }
}