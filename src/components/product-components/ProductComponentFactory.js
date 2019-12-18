import { orderBy } from 'lodash';
import { ORIENTATION, TYPE } from './Constants';

export function convertComponents(items, maxColumn) {
    const newItems = [];
    const itemLength = items.length;
    let orientation = ORIENTATION.RIGHT;
    let order = 0;
    for (let i = 0; i < itemLength; i += 1) {
        const item = {
            ...items[i],
            itemType: TYPE.VALUE,
            dragEnabled: true,
            order,
            key: order,
        };
        newItems.push(item);
        order += 1;
        if (i >= itemLength - 1) {
            break;
        }
        const isLastItemOfRow = (item.order + 1) % maxColumn === 0;
        if (!isLastItemOfRow) {
            newItems.push({
                itemType: TYPE.ARROW,
                orientation,
                dragEnabled: false,
                order,
                key: order,
            });
            order += 1;
        } else {
            let itemType = orientation === ORIENTATION.RIGHT ? TYPE.EMPTY : TYPE.ARROW;
            newItems.push({
                itemType,
                orientation: itemType === TYPE.EMPTY ? undefined : ORIENTATION.BOTTOM,
                dragEnabled: false,
                order,
                key: order,
            });
            order += 1;
            for (let j = 1; j <= maxColumn - 2; j += 1) {
                newItems.push({
                    itemType: TYPE.EMPTY,
                    orientation: undefined,
                    dragEnabled: false,
                    order,
                    key: order,
                });
                order += 1;
            }
            itemType = orientation === ORIENTATION.RIGHT ? TYPE.ARROW : TYPE.EMPTY;
            newItems.push({
                itemType,
                orientation: itemType === TYPE.EMPTY ? undefined : ORIENTATION.BOTTOM,
                dragEnabled: false,
                order,
                key: order,
            });
            order += 1;

            orientation = orientation === ORIENTATION.RIGHT ? ORIENTATION.LEFT : ORIENTATION.RIGHT;
        }
    }
    return newItems;
}

export function revertConvertComponents(items, maxColumn) {
    const newItems = [];
    const itemLength = items.length;
    for (let i = 0; i < itemLength; i += 1) {
        if (items[i].itemType === TYPE.VALUE) {
            const { order, id } = items[i];
            const newOrder = order - (Math.floor(order / maxColumn) * (maxColumn - 1)) / 2;

            const item = {
                id,
                order: newOrder,
                type: items[i].type,
                isDefault: items[i].isDefault,
            };
            newItems.push(item);
        }
    }
    return orderBy(newItems, ['order']);
}

export function orderComponents(items, source, target, maxColumn) {
    const beginOrder = source.order > target.order ? target.order : source.order;
    const endOrder = source.order > target.order ? source.order : target.order;
    const sortedItems = items
        .map(item => {
            if (!item.dragEnabled || item.order > endOrder || item.order < beginOrder) {
                return item;
            }
            const row = Math.floor(item.order / maxColumn);
            if (item.key === source.key) {
                return {
                    ...item,
                    order: target.order,
                };
            }
            if (item.order >= source.order && item.order <= target.order) {
                if (row > 0 && item.order % maxColumn === 0) {
                    return {
                        ...item,
                        order: item.order - (maxColumn + 1),
                    };
                }
                return {
                    ...item,
                    order: item.order - 2,
                };
            }
            if (item.order >= target.order && item.order <= source.order) {
                if ((item.order + 1) % maxColumn === 0) {
                    return {
                        ...item,
                        order: item.order + (maxColumn + 1),
                    };
                }
                return {
                    ...item,
                    order: item.order + 2,
                };
            }
            return item;
        })
        .sort((a, b) => a.order >= b.order);
    return sortedItems;
}
