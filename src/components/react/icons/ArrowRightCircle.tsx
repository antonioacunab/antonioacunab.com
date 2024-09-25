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
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke={color} id={id} className="h-full w-full absolute">
            <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    );
}