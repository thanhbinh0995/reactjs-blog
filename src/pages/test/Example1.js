import React from 'react';
import { NativeTypes } from 'react-dnd-html5-backend';
import Dustbin from './Dustbin';
import Box from './Box';
import ItemTypes from './ItemTypes';

class Container extends React.Component {
    state = {
        dustbins: [
            { accepts: [ItemTypes.GLASS], lastDroppedItem: null },
            { accepts: [ItemTypes.FOOD], lastDroppedItem: null },
            {
                accepts: [ItemTypes.PAPER, ItemTypes.GLASS, NativeTypes.URL],
                lastDroppedItem: null,
            },
            { accepts: [ItemTypes.PAPER, NativeTypes.FILE], lastDroppedItem: null },
        ],
        boxes: [
            { name: 'Bottle', type: ItemTypes.GLASS },
            { name: 'Banana', type: ItemTypes.FOOD },
            { name: 'Magazine', type: ItemTypes.PAPER },
        ],
        droppedBoxNames: [],
    };

    isDropped = boxName => {
        const { droppedBoxNames } = this.state;
        return droppedBoxNames.indexOf(boxName) > -1;
    };

    handleDrop = (index, item) => {
        const { dustbins, droppedBoxNames } = this.state;
        const { name } = item;
        if (name) {
            droppedBoxNames.push(name);
        }
        dustbins[index].lastDroppedItem = item;
        this.setState({ droppedBoxNames, dustbins });
    };

    render() {
        const { dustbins, boxes } = this.state;
        return (
            <div>
                <div style={{ overflow: 'hidden', clear: 'both' }}>
                    {dustbins.map(({ accepts, lastDroppedItem }, index) => (
                        <Dustbin
                            accepts={accepts}
                            lastDroppedItem={lastDroppedItem}
                            onDrop={item => this.handleDrop(index, item)}
                            key={index}
                        />
                    ))}
                </div>

                <div style={{ overflow: 'hidden', clear: 'both' }}>
                    {boxes.map(({ name, type }, index) => (
                        <Box name={name} type={type} isDropped={this.isDropped(name)} key={index} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Container;
