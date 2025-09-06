import { tokenModifier } from "@site/src/utils/pretext"
import { Pretext } from "@site/src/components/pretext"

export const source = {
    integrate:
`const result = zuord.integrate(defaultConfig, {
    contact: { email: 'contact@zuordjs.org' },
    founded: '08-01-2025'
});`
}

export const sourceDefault = {
    integrate:
`const defaultConfig = {
    organization: 'fuuwille',
    contact: { 
        email: 'contact@fuuwille.dev',
        phone: '+1234567890'
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
        email: 'contact@zuordjs.org',
        phone: '+1234567890'
    },
    founded: '08-01-2025'
}`
}

export const valueModifiers = {
    integrate: [
        {
            predicate: (content) => ["founded:"].includes(content),
            props: { style: { color: '#73c991' } }
        },
        {
            predicate: (content) => ["contact:", "email:"].includes(content),
            props: { style: { color: '#d7b787' } }
        },
        {
            predicate: (content) => ["organization:", "phone:"].includes(content),
            props: { style: { color: '#c973a8' } }
        }
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