
export const phonePattern = /^!*([0-9]!*){10,10}$/g;

export const disabledDate = (current) => {
    // Disable January, February, and March of any year
    if (current && (current.month() === 0 || current.month() === 1 || current.month() === 2)) {
        return true;
    }

    // Disable the year 2022
    if (current && current.year() === 2022) {
        return true;
    }

    // Enable all other dates
    return false;
}
