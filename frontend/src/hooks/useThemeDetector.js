import { useState, useEffect } from "react";

const useThemeDetector = () => {
    const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
    const mqListener = (e => {
        setIsDarkTheme(e.matches);
    });

    useEffect(() => {
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        darkThemeMq.addEventListener("theme", mqListener);
        return () => darkThemeMq.removeEventListener("theme", mqListener);
    }, []);
    return isDarkTheme;
}

export default useThemeDetector