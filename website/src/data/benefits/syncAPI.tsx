import { Pretext } from "@site/src/components/pretext";

export const code = {
    integrate: 
`const result = zuord.integrate(defaultUser, {
    profile: { username: 'k4yr2' },
    createdAt: new Date()
});`
}

export const resultType = {
    integrate: 
`type Result = {
    profile: {
        username: string
        location: string
    }, id: number,
    createdAt: Date
}`
}

export const controlData = {
    integrate: {
        text: "integrate",
        inspector: {
            head: <Pretext text={`zuord.integrate(...)`} />,
            body: <Pretext text={code.integrate} />
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