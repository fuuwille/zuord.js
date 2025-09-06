import { BenefitsBody, BenefitsHead } from "@site/src/components/benefits";
import { Pretext } from "@site/src/components/pretext";
import { ShowcaseInspectorHead, ShowcaseInspectorBody } from "@site/src/components/showcase";
import { tokenModifier } from "@site/src/utils/pretext";
import { benefitsBodyUtil } from "../utils/benefits";

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
        body: () => <BenefitsBody.Configurable />,
    }
}

export const benefitsBodyData = {
    syncAPI: {
        control: {
            integrate: benefitsBodyUtil.syncAPI.control({
                text: "integrate",
                inspector: {
                    head: <ShowcaseInspectorHead.Native content={<Pretext text={`zuord.integrate(source, patch)`} modifiers={[tokenModifier.const("zuord")]} />} />,
                    body: <ShowcaseInspectorBody.Description text={() => "Integrates the patch into the source value."} />
                },
            }),
            merge: benefitsBodyUtil.syncAPI.control({
                text: "merge",
                inspector: {
                    head: <ShowcaseInspectorHead.Native content={<Pretext text={`zuord.merge(contents)`} modifiers={[tokenModifier.const("zuord")]} />} />,
                    body: <ShowcaseInspectorBody.Description text={() => "Merges multiple values into a single result."} />
                },
            }),
            evolve: benefitsBodyUtil.syncAPI.control({
                text: "evolve",
                inspector: {
                    head: <ShowcaseInspectorHead.Native content={<Pretext text={`zuord.evolve(source, contents)`} modifiers={[tokenModifier.const("zuord")]} />} />,
                    body: <ShowcaseInspectorBody.Description text={() => "Evolves the source value using the provided contents"} />
                },
            }),
            pick: benefitsBodyUtil.syncAPI.control({
                text: "pick",
                inspector: {
                    head: <ShowcaseInspectorHead.Native content={<Pretext text={`zuord.pick(source, pattern)`} modifiers={[tokenModifier.const("zuord")]} />} />,
                    body: <ShowcaseInspectorBody.Description text={() => "Picks values from the source based on the pattern."} />
                },
            }),
            omit: benefitsBodyUtil.syncAPI.control({
                text: "omit",
                inspector: {
                    head: <ShowcaseInspectorHead.Native content={<Pretext text={`zuord.omit(source, pattern)`} modifiers={[tokenModifier.const("zuord")]} />} />,
                    body: <ShowcaseInspectorBody.Description text={() => "Omits values from the source based on the pattern."} />
                },
            }),
            Integrate: benefitsBodyUtil.syncAPI.control({
                text: "Integrate",
                inspector: {
                    head: <ShowcaseInspectorHead.Native content={<Pretext text={`Zuord.Integrate<TSource, TPatch>`} modifiers={tokenModifier.allType()} />} />,
                    body: <ShowcaseInspectorBody.Description text={() => "Integrates the patch into the source type."} />
                },
            }),
            Merge: benefitsBodyUtil.syncAPI.control({
                text: "Merge",
                inspector: {
                    head: <ShowcaseInspectorHead.Native content={<Pretext text={`Zuord.Merge<TContents>`} modifiers={tokenModifier.allType()} />} />,
                    body: <ShowcaseInspectorBody.Description text={() => "Merges multiple types into a single result."} />
                },
            }),
            Evolve: benefitsBodyUtil.syncAPI.control({
                text: "Evolve",
                inspector: {
                    head: <ShowcaseInspectorHead.Native content={<Pretext text={`Zuord.Evolve<TSource, TContents>`} modifiers={tokenModifier.allType()} />} />,
                    body: <ShowcaseInspectorBody.Description text={() => "Evolves the source type using the provided contents."} />
                },
            }),
            Pick: benefitsBodyUtil.syncAPI.control({
                text: "Pick",
                inspector: {
                    head: <ShowcaseInspectorHead.Native content={<Pretext text={`Zuord.Pick<TSource, TPattern>`} modifiers={tokenModifier.allType()} />} />,
                    body: <ShowcaseInspectorBody.Description text={() => "Picks types from the source based on the pattern."} />
                },
            }),
            Omit: benefitsBodyUtil.syncAPI.control({
                text: "Omit",
                inspector: {
                    head: <ShowcaseInspectorHead.Native content={<Pretext text={`Zuord.Omit<TSource, TPattern>`} modifiers={tokenModifier.allType()} />} />,
                    body: <ShowcaseInspectorBody.Description text={() => "Omits types from the source based on the pattern."} />
                },
            }),
        }
    },
    configurable: {
        control: {
            shallow: {
                text: "shallow",
                inspector: {
                    head: <ShowcaseInspectorHead.Native content={<Pretext text={`zuordMode.shallow`} modifiers={[tokenModifier.const("zuordMode")]} />} />,
                    body: <ShowcaseInspectorBody.Description text={() => "Apply transformation to the first level"} />
                },
            },
            inferless: {
                text: "inferless",
                inspector: {
                    head: <ShowcaseInspectorHead.Native content={<Pretext text={`zuordMode.inferless`} modifiers={[tokenModifier.const("zuordMode")]} />} />,
                    body: <ShowcaseInspectorBody.Description text={() => "Transform without any type inference"} />
                },
            },
            concat: {
                text: "concat",
                inspector: {
                    head: <ShowcaseInspectorHead.Native content={<Pretext text={`zuordMode.concat`} modifiers={[tokenModifier.const("zuordMode")]} />} />,
                    body: <ShowcaseInspectorBody.Description text={() => "Concat arrays without overriding"} />
                },
            },
            unique: {
                text: "unique",
                inspector: {
                    head: <ShowcaseInspectorHead.Native content={<Pretext text={`zuordMode.unique`} modifiers={[tokenModifier.const("zuordMode")]} />} />,
                    body: <ShowcaseInspectorBody.Description text={() => "Include only unique values in arrays"} />
                },
            }
        }
    }
}