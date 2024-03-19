import { useEffect, useState } from "react";
import Moon from "./icons/Moon";
import Sun from "./icons/Sun";
const initialThemeState = localStorage.theme === "dark";
const Header = () => {
    const [darkMode, setDarkMode] = useState(initialThemeState);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <header className="container mx-auto pt-20">
            <div className="flex w-96 gap-44 pl-20 ">
                <h1
                    className="text-3xl font-semibold uppercase 
                    tracking-[0.5em] text-white"
                >
                    ToDo
                </h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <Sun></Sun> : <Moon></Moon>}
                </button>
            </div>
        </header>
    );
};
export default Header;
