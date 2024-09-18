import { ColorsEnum } from "../constants/colors";

type Colorable = "bg" | "border" | "text";

// TODO:
export function getColorClassNameFor (kind: Colorable, colorHex: string): string
{
    if ( colorHex === ColorsEnum.PRIMARY )
        return `${kind}-primary`;

    else if ( colorHex === ColorsEnum.SECONDARY )
        return `${kind}-secondary`;

    else if ( colorHex === ColorsEnum.ACCENT )
        return `${kind}-accent`;

    else
        return `${kind}-black`;
}