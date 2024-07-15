// Validates if the mobile number is 10 digits
export const mobnum_validator = (mobnum) => {
    const regex = /^\d{10}$/;
    return regex.test(mobnum);
};

// Validates if the email is in a correct format
export const email_validator = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

// Validates if the value is at least 1
export const quantity_validator = (value) => {
    return value >= 1;
};

export const pin_validator =(value) =>{
    return value.length == 6;
}

// Validates if the date is today or after today
export const post_date_validator = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to the start of the day
    const inputDate = new Date(date);
    inputDate.setHours(0, 0, 0, 0); // Set time to the start of the day
    return inputDate >= today;
};

// Validates if the date is before today
export const pre_date_validator = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to the start of the day
    const inputDate = new Date(date);
    inputDate.setHours(0, 0, 0, 0); // Set time to the start of the day
    return inputDate < today;
};
