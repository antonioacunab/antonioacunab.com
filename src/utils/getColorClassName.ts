import { ColorsEnum } from "../constants/colors";

// TODO:
export function getColorClassName (colorHex: string): string
{
    if ( colorHex === ColorsEnum.PRIMARY )
        return "text-primary";

    else if ( colorHex === ColorsEnum.SECONDARY )
        return "text-secondary";

    else if ( colorHex === ColorsEnum.ACCENT )
        return "text-accent";

    else
        return "text-black";
}