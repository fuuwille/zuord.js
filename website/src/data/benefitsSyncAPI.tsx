import { tokenModifier } from "@site/src/utils/pretext"
import { Pretext } from "@site/src/components/pretext"

export const source = {
    integrate:
`const result = zuord.integrate(defaultConfig, {
    contact: { email: 'contact@zuordjs.org' },
    founded: '08-01-2025'
});`
}

export const sourceModifiers = {
    integrate: [
        tokenModifier.const("zuord", "defaultConfig"),
        tokenModifier.featured("defaultConfig", null)
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
            predicate: (content) => ["contact:", "email:", "founded:"].includes(content),
            props: { color: '#1bff99' }
        },
        {
            predicate: (content) => ["organization:", "phone:"].includes(content),
            props: { color: '#ff6598' }
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