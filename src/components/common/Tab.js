import { useState } from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import Responsive from "./Responsive";

const TabMenu = styled.ul`
  background: ${palette.cyan[1]};
  color: white;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;

  .submenu {
    position: relative;
    flex-grow: 1;
    padding: 10px;
    font-size: 1.125rem;
    text-align: center;
    text-shadow: rgba(0,0,0,.5) -1px 1px 3px;
    transition: 0.5s;
    cursor: pointer;
    &:nth-child(n)::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      display: block;
      background-color: #fff;
      width: 3px;
      height: 100%;
    }
    &:last-child::after {
      display: none;
    }
  }
  .focused {
    background: ${palette.cyan[2]};
  }
`;
const Desc = styled.div`
  height: 15rem;
  background: ${palette.cyan[2]};
`;

const Tab = (props) => {
  const [currentTab, clickTab] = useState(0);
  const selectMenuHandler = (index) => {
    clickTab(index);
  };
  return (
    <>
      <Responsive>
        <TabMenu>
          {props.menuArr.map((el, index) => (
              <li
                className={index === currentTab ? "submenu focused" : "submenu" }
                onClick={() => selectMenuHandler(index)}
                key={index}
                >{el.name}
              </li>
          ))}
        </TabMenu>
        <Desc>
          {props.menuArr[currentTab].content}
        </Desc>
      </Responsive>
    </>
  );
}

export default Tab;