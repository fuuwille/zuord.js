import { tokenModifier } from "@site/src/utils/pretext"
import { Pretext } from "@site/src/components/pretext"

export const code = {
    integrate:
`const result = zuord.integrate(defaultConfig, {
    contact: { email: 'contact@zuordjs.org' },
    founded: '08-01-2025'
});`
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

export const modifiers = {
    integrate: [
        tokenModifier.const("zuord", "defaultConfig"),
        tokenModifier.type("Date"),
        tokenModifier.featured("defaultConfig", null)
    ]
}

export const inspector = {
    body: {
        example: {
            integrate: () => <Pretext text={code.integrate} modifiers={modifiers.integrate} />
        },
        value: {
            integrate: () => <Pretext text={value.integrate} modifiers={modifiers.integrate} />
        }
    }
}