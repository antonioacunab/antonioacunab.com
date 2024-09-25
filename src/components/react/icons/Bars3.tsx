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
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    );
}