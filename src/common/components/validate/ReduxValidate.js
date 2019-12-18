const required = value => (value == null ? 'This field is required' : undefined);
const min6character = value =>
    value.length < 6 ? 'This field has at least 6 characters' : undefined;
const max100character = value =>
    value.length > 100 ? 'This field has at most 100 characters' : undefined;
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email' : undefined;

const max = (value, length = 0) => {
    if (value === null) {
        return 'This field is required';
    }
    return value.length > length && length !== 0
        ? `This field has at most ${length} characters`
        : undefined;
};

const min = (value, length = 0) => {
    if (value === null) {
        return 'This field is required';
    }
    return value.length < length && length !== 0
        ? `This field has at least ${length} characters`
        : undefined;
};

export default { required, max100character, email, min6character, min, max };
