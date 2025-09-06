import { BenefitsBody, BenefitsHead } from "@site/src/components/benefits";
import { Pretext } from "@site/src/components/pretext";
import { ShowcaseInspectorHead, ShowcaseInspectorBody, Showcase } from "@site/src/components/showcase";
import { tokenModifier } from "@site/src/utils/pretext";
import { benefitsBodyUtil } from "../utils/benefits";
import { evolve } from "zuord/dist/main/zuord.runtime";

export const benefitsData = {
    syncAPI: {
        head: () => <BenefitsHead.Native title={"Sync Runtime & Type APIs"} description={"Experience APIs synchronized between runtime behavior and type system."} />,
        body: () => <BenefitsBody.SyncAPI />
    },
    zeroCostRT: {
        head: () => <BenefitsHead.Native title={"Zero-Cost Return Types"} description={"Return types fully managed by the compiler, with zero runtime cost."} />,
        body: () => <BenefitsBody.ZeroCostRT />
    },
    recursive: {
        head: () => <BenefitsHead.Native title={"Recursive Transformation"} description={"Transform structures recursive-first, with optional shallow mode."} />,
        body: () => null,
    },
    configurable: {
        head: () => <BenefitsHead.Native title={"Configurable Modes"} description={"Customize modes to fit your needs, with full type inference."} />,
        body: () => null,
    }
}

export const benefitsBodyData = {
    syncAPI: {
        control: {
            integrate: benefitsBodyUtil.syncAPI.control({
                text: "integrate",
                inspector: {
                    head: <ShowcaseInspectorHead.Detailed content={<Pretext text={`zuord.integrate(source, patch)`} modifiers={[tokenModifier.const("zuord")]} />} />,
                    body: <ShowcaseInspectorBody.Description text={() => "Integrates the patch into the source value."} />
                },
            }),
            merge: benefitsBodyUtil.syncAPI.control({
                text: "merge",
                inspector: {
                    head: <ShowcaseInspectorHead.Detailed content={<Pretext text={`zuord.merge(contents)`} modifiers={[tokenModifier.const("zuord")]} />} />,
                    body: <ShowcaseInspectorBody.Description text={() => "Merges multiple content values into a single result."} />
                },
            }),
            evolve: benefitsBodyUtil.syncAPI.control({
                text: "evolve",
                inspector: {
                    head: <ShowcaseInspectorHead.Detailed content={<Pretext text={`zuord.evolve(source, contents)`} modifiers={[tokenModifier.const("zuord")]} />} />,
                    body: <ShowcaseInspectorBody.Description text={() => "Evolves the source value using the provided contents"} />
                },
            }),
            pick: benefitsBodyUtil.syncAPI.control({
                text: "pick",
                inspector: {
                    head: <ShowcaseInspectorHead.Detailed content={<Pretext text={`zuord.pick(source, pattern)`} modifiers={[tokenModifier.const("zuord")]} />} />,
                    body: <ShowcaseInspectorBody.Description text={() => "Picks values from the source based on the pattern."} />
                },
            }),
        }
    }
}