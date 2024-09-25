import type { ReactElement } from "react";

import type { ColorsEnum } from "../../../constants/colors";

interface Props
{
    id     : string;
    color  : ColorsEnum;
    onClick: Function;
}

export default function ArrowRight ({ id, color, onClick }: Props): ReactElement
{
    return (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="3" id={id} stroke={color} className="h-full w-full relative" onClick={() => onClick()}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
    );
}