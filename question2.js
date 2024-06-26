
function transformDateFormat(dates) {
    const formattedDates = [];

    for (let i = 0; i < dates.length; i++) {
        let date = dates[i];

   
        if (/^\d{4}\/\d{2}\/\d{2}$/.test(date)) {
            const [year, month, day] = date.split('/');
            formattedDates.push(`${year}${month}${day}`);
        }
        else if (/^\d{2}\/\d{2}\/\d{4}$/.test(date)) {
            const [day, month, year] = date.split('/');
            formattedDates.push(`${year}${month}${day}`);
        }
    
        else if (/^\d{2}-\d{2}-\d{4}$/.test(date)) {
            const [month, day, year] = date.split('-');
            formattedDates.push(`${year}${month}${day}`);
        }
    }

    return formattedDates;
}

const dates = ["2010/02/20", "19/12/2016", "11-18-2012", "20130720"];
console.log(transformDateFormat(dates));
