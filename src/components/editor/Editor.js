import TitleArea from './TitleArea';
import Responsive from '../common/Responsive';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from "react-quill";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Button from "../common/Button";

const EditorBlock = styled.div`
  background: ${palette.gray[0]};
  .wrapper {
    padding-top: 1rem;
    background: white;
    box-shadow: 0 0 5px rgba(0, 0, 0, .2);
  }
  .ql-editor {
    min-height: 35rem;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-container {
    border: none;
  }
`;

const Footer = styled.div`
  background: white;
  border-top: solid 1px ${palette.gray[1]};
  padding: 1rem;
  text-align: center;
`

const Editor = () => {
  const module = {
    toolbar: [
      [{ 'size': ['small', false, 'large', 'huge'] }],
      [{ header: 1 }, { header: 2 }, ],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{ list: 'ordered'}, { list: 'bullet' }, {'indent': '-1'}, {'indent': '+1'}],
    ],
  };
  const formats = [
    'size',
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
    'align', 'color', 'background',
  ]
  return (
    <>
      <TitleArea />
      <EditorBlock>
        <Responsive className="wrapper">
          <ReactQuill
            theme="snow"
            modules={module}
            formats={formats}
          />
        </Responsive>
      </EditorBlock>
      <Footer>
        <Button bright>작성 완료</Button>
      </Footer>
    </>
  );
}

export default Editor;
