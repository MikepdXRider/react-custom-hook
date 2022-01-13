export default function dateFormatter(dateStr){
    const [year, month, day] = dateStr.split('-');

    const newArr = [month, day, year];

    return newArr.join('-');
}