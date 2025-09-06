import { tokenModifier } from "@site/src/utils/pretext"
import { Pretext } from "@site/src/components/pretext"

export const source = {
    integrate:
`const result = zuord.integrate(defaultConfig, {
    contact: { phone: 1234567890 },
    founded: '08-01-2025'
});`
}

export const sourceDefault = {
    integrate:
`const defaultConfig = {
    organization: 'fuuwille',
    contact: { 
        phone: '+1234567890',
        email: 'contact@fuuwille.dev',
    }
};`
}

export const sourceModifiers = {
    integrate: [
        tokenModifier.const("zuord", "defaultConfig"),
        tokenModifier.featured("defaultConfig", () => <Pretext text={sourceDefault.integrate} />),
    ]
}

export const value = {
    integrate:
`const result = {
    organization: 'fuuwille',
    contact: { 
        phone: 1234567890,
        email: 'contact@fuuwille.dev'
    },
    founded: '08-01-2025'
}`
}

export const valueModifiers = {
    integrate: [
        tokenModifier.diff(["organization:", "phone:"], "origin"),
        tokenModifier.diff(["contact:", "email:"], "modified"),
        tokenModifier.diff(["founded:"], "added"),
    ]
}


export const inspector = {
    body: {
        source: {
            integrate: () => <Pretext text={source.integrate} modifiers={sourceModifiers.integrate} />
        },
        value: {
            integrate: () => <Pretext text={value.integrate} modifiers={valueModifiers.integrate} />
        }
    }
}