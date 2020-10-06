module.exports = function toReadable (num) {
    
    let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten' , 'eleven' ,'twelve' ,'thirteen' ,'fourteen' ,'fifteen' ,'sixteen' ,'seventeen' ,'eighteen' ,'nineteen'];
    let tens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    
    let str = String(num);
    let myArr = str.split('');
    
    let onesDigit = +str.slice(str.length - 1);
    let tensDigit = +str.slice(str.length - 2, str.length - 1);
    let hundredsDigit = +str.slice(str.length - 3, str.length - 2);
    let thousandsDigits = +str.slice(str.length - 4, str.length - 3);
    
    let tenToTwenty = +str.slice(str.length - 2);
    
    if (myArr.length > 1) {
    // two digits
    if (myArr.length === 2) {
        if (myArr[myArr.length - 2] === '1') {
            return ones[tenToTwenty];
        } else {
            return `${tens[tensDigit]} ${ones[onesDigit]}`
            .replace(/\s\s/, ' ') // delete double spaces
            .replace(/\s$/, ""); // delete trailing spaces
        }
    }
    // three digits
    if (myArr.length === 3) {
        if (myArr[myArr.length - 2] === '1') {
            return `${ones[hundredsDigit]} hundred ${ones[tenToTwenty]}`
            .replace(/\s\s/, ' ')
            .replace(/\s$/, "");
        } else {
            return `${ones[hundredsDigit]} hundred ${tens[tensDigit]} ${ones[onesDigit]}`
            .replace(/\s\s/, ' ')
            .replace(/\s$/, "");
        }
    }
    // four digits (and so on ...)
    if (myArr.length === 4) {
        if (myArr[myArr.length - 2] === '1') {
            return `${ones[thousandsDigits]} thousand ${ones[hundredsDigit]} hundred ${ones[tenToTwenty]}`
            .replace(/\s\s/, ' ')
            .replace(/\s$/, "");
        } else {
            return `${ones[thousandsDigits]} thousand ${ones[hundredsDigit]} hundred ${tens[tensDigit]} ${ones[onesDigit]}`
            .replace(/\s\s/, ' ')
            .replace(/\s$/, "");
        }
    }
    } else {
    // one digit
        if (myArr[0] === '0') {
            return 'zero'
        } else {
            return ones[myArr[0]]
        }
    }
}
