const menuIcon  : HTMLElement | null = document.getElementById("menuIcon");
const closeIcon : HTMLElement | null = document.getElementById("closeIcon");
const menuList  : HTMLElement | null = document.getElementById("menuList")

// TODO:
export function toggleMenu (): void
{
    console.log("click")

    menuIcon?.classList.toggle("invisible");
    closeIcon?.classList.toggle("invisible");
    menuList?.classList.toggle("invisible");
};