import React from 'react';
import ReactQuill from 'react-quill';

function RenderReduxTextArea({ input }) {
    return (
        <div className="app">
            <ReactQuill
                {...input}
                theme="snow"
                modules={RenderReduxTextArea.modules}
                formats={RenderReduxTextArea.formats}
                placeholder="Write..."
                onChange={(newValue, delta, source) => {
                    if (source === 'user') {
                        input.onChange(newValue);
                    }
                }}
                onBlur={(range, source, quill) => {
                    input.onBlur(quill.getHTML());
                }}
            />
        </div>
    );
}

RenderReduxTextArea.modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        ['link', 'image', 'video'],
        ['clean'],
    ],
    clipboard: {
        matchVisual: false,
    },
};

RenderReduxTextArea.formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
];

export default RenderReduxTextArea;
