import UUIDv4 from 'uuid/v4';
import _ from 'lodash';

function trimObject(values) {
    Object.keys(values).forEach(key => {
        if (typeof values[key] === 'string') {
            values[key] = values[key].trim();
        }
    });
    return values;
}

function uuid() {
    return UUIDv4();
}

function getValuesChangeTwoObj(oldValues, newValues) {
    const objectChange = {};
    Object.keys(newValues).forEach(key => {
        if (newValues[key] !== oldValues[key]) {
            objectChange[key] = newValues[key];
        }
    });
    return _.isEmpty(objectChange) ? null : objectChange;
}

function getValueFromObj(values) {
    const stringValues = {};
    Object.keys(values).forEach(key => {
        if (typeof values[key] === 'string') {
            stringValues[key] = values[key];
        } else if (typeof values[key] === 'boolean') {
            stringValues[key] = values[key];
        } else if (typeof values[key] === 'number') {
            stringValues[key] = values[key];
        }
    });
    return stringValues;
}

export { trimObject, uuid, getValuesChangeTwoObj, getValueFromObj };
