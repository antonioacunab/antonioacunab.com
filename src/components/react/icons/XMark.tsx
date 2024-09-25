import type { ReactElement } from "react";

import type { ColorsEnum } from "../../../constants/colors";

interface Props
{
    id   : string;
    color: ColorsEnum;
}

export default function Bars3 ({ id, color }: Props): ReactElement
{
    return (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke={color} id={id} className="h-full w-full absolute invisible">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
    );
}