import type { ReactElement } from "react";

import type { ColorsEnum } from "../../../constants/colors";

interface Props
{
    id     : string;
    color  : ColorsEnum;
    onClick: Function;
}

export default function XLogo ({ id, color, onClick }: Props): ReactElement
{
    return (
        <a href="https://x.com/antonioacunab" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50" strokeWidth="1" id={id} stroke={color} onClick={() => onClick()}>
                <path fill={color} d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
            </svg>
        </a>
    );
}