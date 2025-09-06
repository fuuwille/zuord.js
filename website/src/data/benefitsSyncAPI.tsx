import { tokenModifier } from "@site/src/utils/pretext"
import { Pretext } from "@site/src/components/pretext"

export const source = {
    integrate:
`const result = zuord.integrate(defaultConfig, {
    contact: { phone: 1234567890 },
    founded: new Date('2025-01-08')
});`
}

export const sourceDefault = {
    integrate:
`const defaultConfig = {
    organization: 'fuuwille',
    contact: {         
        email: 'contact@fuuwille.dev',
        phone: '+1234567890',
    }
};`
}

export const sourceModifiers = {
    integrate: [
        tokenModifier.const("zuord", "defaultConfig"),
        tokenModifier.type("Date"),
        tokenModifier.featured("defaultConfig", () => <Pretext text={sourceDefault.integrate} />),
    ]
}

export const value = {
    integrate:
`const result = {
    organization: 'fuuwille',
    contact: { 
        email: 'contact@fuuwille.dev',
        phone: 1234567890
    },
    founded: new Date('2025-01-08')
}`
}

export const valueModifiers = {
    integrate: [        
        tokenModifier.type("Date"),
        tokenModifier.diff(["organization:", "email:"], "origin"),
        tokenModifier.diff(["contact:", "phone:"], "modified"),
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