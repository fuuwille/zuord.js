import { Pretext } from "@site/src/components/pretext";
import { ShowcaseInspectorBody, ShowcaseInspectorHead } from "@site/src/components/showcase";
import { PretextTokenModifier } from "@site/src/types/pretext";
import { tokenModifier } from "@site/src/utils/pretext";

export const code = {
    integrate: 
`const result = zuord.integrate(defaultUser, {
    profile: { username: 'k4yr2' },
    createdAt: new Date()
});`
}

export const modifiers: Record<string, PretextTokenModifier[]> = {
    integrate: [
        tokenModifier.const("zuord", "defaultUser"),
        tokenModifier.type("Date", "User"),
        tokenModifier.featured("defaultUser", <Pretext text={
`const defaultUser = {
    profile: { 
        username: 'unnamed',
        location: 'Earth'
    }, id: '31422200',
}`} design={{ selectable: false }} />)
    ]
}

export const controlData = {
    integrate: {
        text: "integrate",
        inspector: {
            head: <ShowcaseInspectorHead.Detailed content={<Pretext text={`zuord.integrate(base, input)`} modifiers={[tokenModifier.const("zuord")]} />} />,
            body: <ShowcaseInspectorBody.Trial example={() => <Pretext text={"code.integrate"} modifiers={modifiers.integrate} />} value={null} inference={null} />
        }
    },
    merge: {
        text: "merge",
        inspector: {
            head: <Pretext text={`zuord.merge(...)`} />,
            body: <Pretext text={code.integrate} />
        }
    },
    evolve: {
        text: "evolve",
        inspector: {
            head: <Pretext text={`zuord.evolve(...)`} />,
            body: <Pretext text={code.integrate} />
        }
    },
    pick: {
        text: "pick",
        inspector: {
            head: <Pretext text={`zuord.pick(...)`} />,
            body: <Pretext text={code.integrate} />
        }
    },
    omit: {
        text: "omit",
        inspector: {
            head: <Pretext text={`zuord.omit(...)`} />,
            body: <Pretext text={code.integrate} />
        }
    },
    Integrate: {
        text: "Integrate",
        inspector: {
            head: <Pretext text={`zuord.Integrate(...)`} />,
            body: <Pretext text={code.integrate} />
        }
    },
    Merge: {
        text: "Merge",
        inspector: {
            head: <Pretext text={`zuord.Merge(...)`} />,
            body: <Pretext text={code.integrate} />
        }
    },
    Evolve: {
        text: "Evolve",
        inspector: {
            head: <Pretext text={`zuord.Evolve(...)`} />,
            body: <Pretext text={code.integrate} />
        }
    },
    Pick: {
        text: "Pick",
        inspector: {
            head: <Pretext text={`zuord.Pick(...)`} />,
            body: <Pretext text={code.integrate} />
        }
    },
    Omit: {
        text: "Omit",
        inspector: {
            head: <Pretext text={`zuord.Omit(...)`} />,
            body: <Pretext text={code.integrate} />
        }
    }
};