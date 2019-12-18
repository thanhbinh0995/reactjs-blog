export function getPageTitle(menus, path) {
    const menuItem = menus.filter(item => item.path === path);
    return menuItem.length > 0 ? menuItem[0].title : '';
}

export function insertItemToArrayByIndex(position, item, array) {
    return [...array.slice(0, position), item, ...array.slice(position)];
}

export function checkSafari(p) {
    return p.toString() === '[object SafariRemoteNotification]';
}

export function checkBrowser() {
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    const isSafari =
        /constructor/i.test(window.HTMLElement) ||
        checkSafari(!window.safari || (typeof safari !== 'undefined' && safari.pushNotification));
    return !!(isChrome || isSafari);
}

// get first character of each words and uppercase it
export function getCodeFromName(name, numberCharacter = 1, separatorCharacter = '') {
    const nameWords = name.split(' ');
    const codes = [];
    for (let x = 0; x < nameWords.length; x += 1) {
        const word = nameWords[x].slice(0, numberCharacter).toUpperCase();
        if (word) {
            codes.push(word);
        }
    }
    return codes.join(separatorCharacter);
}

export function getCodeFromNameStartWithAlphabet(
    name,
    numberCharacter = 1,
    separatorCharacter = ''
) {
    const nameWords = name.split(' ');
    const codes = [];
    for (let x = 0; x < nameWords.length; x += 1) {
        let word = '';
        if (numberCharacter === -1) {
            word = nameWords[x].slice(0).toUpperCase();
        } else {
            word = nameWords[x].slice(0, numberCharacter).toUpperCase();
        }
        if (word) {
            if (/[a-zA-Z]/.test(word.charAt(0)) || codes.length !== 0) {
                codes.push(word);
            }
        }
    }
    return codes.join(separatorCharacter);
}

export function getStatusAction(actionType) {
    if (actionType.split('_').pop() === 'SUCCESS' || actionType.split('_').pop() === 'FAILURE') {
        return true;
    }
    return false;
}

export function getFieldName(name = '') {
    return name.toUpperCase().replace(/ /g, '_');
}

export function findIndexById(data, id, key = 'id') {
    let result = -1;
    if (Array.isArray(data) && id) {
        data.some((item, index) => {
            if (item[key] === id) {
                result = index;
                return true;
            }
            return false;
        });
    }
    return result;
}

export function parseCurrency(currency, amount, hideLabelCurrency) {
    const config = {
        style: 'currency',
        minimumFractionDigits: 2,
        currencyDisplay: 'code',
    };
    config.currency = currency || 'SDG';
    if (hideLabelCurrency) {
        delete config.style;
    }
    return new Intl.NumberFormat('en-US', config).format(amount);
}

export function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

export function getSorting(order, orderBy) {
    return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

export function deleteProperties(object, properties) {
    properties.map(property => {
        delete object[property];
        return object;
    });
    return object;
}

export const deleteUnusedProperties = (object, properties) => {
    Object.keys(object).forEach(key => {
        if (properties.indexOf(key) === -1) {
            delete object[key];
        }
    });
    return object;
};
