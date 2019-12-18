const validateRedux = (values, validations) => {
    const errors = {};
    Object.keys(validations).forEach(field => {
        const value = values[field];
        const error = validations[field]
            .map(validateField => validateField(value, values))
            .filter(x => x)[0];
        errors[field] = error;
    });
    return errors;
};

export { validateRedux };
