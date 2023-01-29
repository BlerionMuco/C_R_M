const useGetThemeOnStorage = () => {
    const getCurrentTheme = localStorage.getItem("theme")
    if (getCurrentTheme === 'false') {
        return false
    }
    else { return true }
}

export default useGetThemeOnStorage