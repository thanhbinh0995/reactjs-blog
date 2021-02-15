import React from 'react';
import { Icon } from 'react-fa';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { DragNDropContainer, DragNDropItem } from 'react-dnd-ax';

// import '../styles/common.css';
// import './basic-example.css';

const basicItems = Array.from(Array(100).keys()).map(num => {
    return {
        id: num,
        text: `Row ${num}`,
    };
});

class BasicExample extends React.Component {
    state = {
        items: basicItems,
        anchorEl: null,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    onReorderLinks = newItems => {
        this.setState({
            items: [...newItems],
        });
    };

    handleTest = () => {
        console.log('test1');
    };

    render() {
        const { items, anchorEl } = this.state;

        const BasicItem = DragNDropItem(({ item, itemRef, dragPointRef }) => (
            <div
                ref={itemRef} // mandatory: put this attribute to the container element of the movable item
            >
                <span className="text">{item.text}</span>
                <div // mandatory if supporting FireFox. FireFox does not support dragstart event on buttons.
                    ref={dragPointRef} // mandatory: put this attribute to the drag handler
                    draggable // mandatory HTML attribute for drag handler
                >
                    <Icon name="arrows" />
                </div>
            </div>
        ));

        const BasicList = DragNDropContainer(props => (
            <div>
                {props.items.map((item, index) => (
                    <BasicItem
                        item={item}
                        index={index}
                        key={item.id}
                        {...props} // mandatory: need to pass down the props
                    />
                ))}
            </div>
        ));

        return (
            <div className="container-1">
                <BasicList items={items} onReorderItem={this.onReorderLinks} />
            </div>
        );
    }
}

export default BasicExample;
