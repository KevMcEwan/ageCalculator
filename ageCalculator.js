const calculateAgeInteger = function (yyyy, mm, dd) {

    var dateAsString = yyyy + '/' + mm + '/' + dd;
    var dob = new Date(dateAsString);
    var today = new Date();

    var yearOfDateToday = today.getFullYear();
    var yearOfDateOfBirth = dob.getFullYear();
    var monthOfDateToday = today.getMonth() + 1;
    var monthOfDateOfBirth = dob.getMonth() + 1;
    var dayOfDateToday = today.getDate();
    var dayOfDateOfBirth = dob.getDate();
    

    if (monthOfDateToday > monthOfDateOfBirth) {
        return yearOfDateToday - yearOfDateOfBirth;
    } else if (monthOfDateToday < monthOfDateOfBirth) {
        return yearOfDateToday - yearOfDateOfBirth - 1;
    } else if (monthOfDateToday == monthOfDateOfBirth) {
        if (dayOfDateToday < dayOfDateOfBirth) {
            return yearOfDateToday - yearOfDateOfBirth - 1;
        } else {
            return yearOfDateToday - yearOfDateOfBirth;
        }
    };
}




