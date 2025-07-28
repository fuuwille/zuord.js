import { internalZuord as internal } from "../../internal";
import { zuordCore as core } from "@zuord/core";
import { shapeZuord as shape, ShapeZuord as Shape } from "../../shape";
import { mode as defaultMode } from "./mode";

export function object(base: Shape.Integrate.Object, input: Shape.Integrate.Object, mode: Shape.Integrate.Mode, strict: boolean) {
    if (!shape.integrateSource(base)) {
        throw new TypeError("Integrate function expects the base to be a valid IntegrateSource.");
    }

    if (!shape.integrateSource(input)) {
        throw new TypeError("Integrate function expects the input to be a valid IntegrateSource.");
    }

    if (!shape.integrateMode(mode)) {
        throw new TypeError("Integrate function expects the mode to be a valid IntegrateMode.");
    }

    return internal.integrate(base, input, core.modeResolve([defaultMode, mode]), strict);
}