import React from 'react';
import { DragSource } from 'react-dnd';

const style = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
    // width: '100%'
};

export class Box extends React.Component {
    // componentDidMount() {
    //     const { connectDragPreview, connectDropTarget } = this.props;
    //     connectDragPreview(connectDropTarget(<div>testd</div>));
    // }

    render() {
        const { name, isDropped, isDragging, connectDragSource, connectDragPreview } = this.props;
        const opacity = isDragging ? 0.4 : 1;
        return connectDragPreview(
            <div style={Object.assign({}, style, { opacity })}>
                {connectDragSource(
                    <button
                        onClick={() => {
                            console.log('tset 1');
                        }}
                        style={Object.assign({}, style, { opacity })}
                    >
                        {isDropped ? <s>{name}</s> : name}
                    </button>
                )}
                Drag me by the handle
            </div>
        );
    }
}

export default DragSource(
    props => props.type,
    {
        beginDrag: props => ({ name: props.name }),
    },
    (connect, monitor) => ({
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging(),
    })
)(Box);
