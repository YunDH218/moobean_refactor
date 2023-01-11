import TitleArea from './TitleArea';
import 'quill/dist/quill.bubble.css';
import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import Quill from 'quill/quill';
import Responsive from '../common/Responsive';

const QuillWrapper = styled.div`
  padding-top: 7rem;
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0;
  }
`;

const Editor = () => {
  const quillElement = useRef(null);  // set DivElement which adapt Quill
  const quillInstance = useRef(null); // Set Quill Instance

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: 'bubble',
      modules: {
        toolbar: [
          [{ header: ['1', '2'] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['blockquote', 'code-block'],
        ],
      },
    });
  }, []);

  return (
    <>
      <TitleArea />
      <Responsive>
        <QuillWrapper>
          <div ref={quillElement} />
        </QuillWrapper>
      </Responsive>
    </>
  );
}

export default Editor;
