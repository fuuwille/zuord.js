import { Pretext } from "@site/src/components/pretext";

export const code = {
    integrate: 
`const defaultUser = {
    profile: {
        username: 'unknown',
        location: 'Earth'
    }, id: 31400222
};

zuord.integrate(defaultUser, {
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
            head: {
                title: <Pretext text={`zuord.integrate(...)`} />
            },
            body: {
                code: <Pretext text={code.integrate} />,
                result: {
                    type: <Pretext text={resultType.integrate} />,
                    runtime: "zuord.integrate(...)"
                }
            }
        }
    },
    merge: {
        text: "merge",
        inspector: {
            head: {
                title: <Pretext text={`zuord.merge(...)`} />
            },
            body: {
                code: "zuord.merge(...)",
                result: {
                    type: "MERGE",
                    runtime: "zuord.merge(...)"
                }
            }
        }
    },
    evolve: {
        text: "evolve",
        inspector: {
            head: {
                title: <Pretext text={`zuord.evolve(...)`} />
            },
            body: {
                code: "zuord.evolve(...)",
                result: {
                    type: "EVOLVE",
                    runtime: "zuord.evolve(...)"
                }
            }
        }
    },
    pick: {
        text: "pick",
        inspector: {
            head: {
                title: <Pretext text={`zuord.pick(...)`} />
            },
            body: {
                code: "zuord.pick(...)",
                result: {
                    type: "PICK",
                    runtime: "zuord.pick(...)"
                }
            }
        }
    },
    omit: {
        text: "omit",
        inspector: {
            head: {
                title: <Pretext text={`zuord.omit(...)`} />
            },
            body: {
                code: "zuord.omit(...)",
                result: {
                    type: "OMIT",
                    runtime: "zuord.omit(...)"
                }
            }
        }
    },
    Integrate: {
        text: "Integrate",
        inspector: {
            head: {
                title: <Pretext text={`Zuord.Integrate<...>`} />
            },
            body: {
                code: <Pretext text={`zuord.Integrate(...)`} />,
                result: {
                    type: <Pretext text={`Zuord`} />,
                    runtime: <Pretext text={`zuord.Integrate(...)`} />
                }
            }
        }
    },
    Merge: {
        text: "Merge",
        inspector: {
            head: {
                title: <Pretext text={`Zuord.Merge<...>`} />
            },
            body: {
                code: <Pretext text={`zuord.Merge(...)`} />,
                result: {
                    type: <Pretext text={`Zuord`} />,
                    runtime: <Pretext text={`zuord.Merge(...)`} />
                }
            }
        }
    },
    Evolve: {
        text: "Evolve",
        inspector: {
            head: {
                title: <Pretext text={`Zuord.Evolve<...>`} />
            },
            body: {
                code: <Pretext text={`zuord.Evolve(...)`} />,
                result: {
                    type: <Pretext text={`Zuord`} />,
                    runtime: <Pretext text={`zuord.Evolve(...)`} />
                }
            }
        }
    },
    Pick: {
        text: "Pick",
        inspector: {
            head: {
                title: <Pretext text={`Zuord.Pick<...>`} />
            },
            body: {
                code: <Pretext text={`zuord.Pick(...)`} />,
                result: {
                    type: <Pretext text={`Zuord`} />,
                    runtime: <Pretext text={`zuord.Pick(...)`} />
                }
            }
        }
    },
    Omit: {
        text: "Omit",
        inspector: {
            head: {
                title: <Pretext text={`Zuord.Omit<...>`} />
            },
            body: {
                code: <Pretext text={`zuord.Omit(...)`} />,
                result: {
                    type: <Pretext text={`Zuord`} />,
                    runtime: <Pretext text={`zuord.Omit(...)`} />
                }
            }
        }
    }
}