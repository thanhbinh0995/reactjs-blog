import React from 'react';
import Example from './example';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

function DragDrop() {
    return (
        <div className="App">
            <DragDropContextProvider backend={HTML5Backend}>
                <Example />
            </DragDropContextProvider>
        </div>
    );
}

export default DragDrop;
