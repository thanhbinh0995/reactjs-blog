import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class TextArea extends Component {
    constructor(props) {
        super(props);
        this.state = { editorHtml: '' };
    }

    onChange = html => {
        this.setState({ editorHtml: html });
    };

    render() {
        const { editorHtml } = this.state;

        return (
            <div className="app react-quill">
                <ReactQuill
                    theme="snow"
                    onChange={this.onChange}
                    value={editorHtml}
                    modules={TextArea.modules}
                    formats={TextArea.formats}
                    bounds=".app"
                    placeholder="Write..."
                />
            </div>
        );
    }
}

TextArea.modules = {
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

TextArea.formats = [
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

TextArea.propTypes = {};

export default TextArea;
