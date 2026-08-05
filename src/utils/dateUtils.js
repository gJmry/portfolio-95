const computeAge = (birthDate) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const hasBirthdayPassed =
        today.getMonth() > birth.getMonth() ||
        (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());
    return hasBirthdayPassed ? age : age - 1;
};

const computeProgress = (startYear, endYear) => {
    const startDate = new Date(`${startYear}-09-01`);
    const endDate = new Date(`${endYear}-08-31`);
    const today = new Date();
    if (today <= startDate) return 0;
    if (today >= endDate) return 100;
    const totalTime = endDate - startDate;
    const elapsedTime = today - startDate;
    return Math.round((elapsedTime / totalTime) * 100);
};

export { computeAge, computeProgress };

