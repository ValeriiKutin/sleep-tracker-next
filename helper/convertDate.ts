export const convertDate = (date: Date) => {
    const formattedDate = new Intl.DateTimeFormat('uk-UA', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }).format(date);


    const deleteDot = formattedDate.replace(/\./g, "");

    const day = deleteDot.slice(0, 2);
    const month = deleteDot.slice(2, 4);
    const year = deleteDot.slice(4);


    return `${month}/${day}/${year}`;
}