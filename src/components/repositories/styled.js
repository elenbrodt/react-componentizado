import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel} from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
  margin-left: 30px;
`;

WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = styled(Tab)`
  border-radius: 16px;
  padding: 16px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: "#fff";
  margin-right:16px;

  &.is-selected{
    box-shadow: -5px -5px 10px rgba(0,0,0,0.2);
    background-color: #88abc2;
    color: white;
    font-weight: bold;
    border-bottom-left-radius:0px;
    border-bottom-right-radius:0px;
  }
`;

WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = styled(TabPanel)`
  display:none;
  
  margin-top: -5px;  
  justify-content: space-between;

  &.is-selected{
    display:block;
    background-color: #88abc2;
    border-radius: 10px;
    box-shadow: -5px -5px 10px rgba(0,0,0,0.2);
    
  }
  `;

WrapperTabPanel.tabsRole = 'TabPanel';

export const WrapperList = styled.div`
  display:flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding: 16px;
`;

