import React from "react";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import "./Header.scss";
import StartBtn from "../../../components/StartBtn";
export default function Header(props) {
  const menu = (
    <Menu>
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2nd menu item</Menu.Item>
      <Menu.Item>3rd menu item</Menu.Item>
    </Menu>
  );

  return (
    <header className="header">
      <div className="logo-wrap">
        <h1 className="logo-main">EasyLang</h1>
        <Dropdown overlay={menu} placement="bottomLeft" arrow>
          <Button
            style={{
              color: "#215599",
              fontWeight: "bold",
              marginLeft: "50px",
              border: "none",
            }}
          >
            English
            <DownOutlined />
          </Button>
        </Dropdown>
      </div>
      <div className="list">
        <ul className="menu-list">
          <li className="menu-item">
            <a className="menu-nav__link" href="#">
              Premium Account
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-nav__link" href="#">
              Watch &amp; Learn
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-nav__link" href="#">
              Read &amp; Learn
            </a>
          </li>
          <li className="menu-item">
            <a className="menu-nav__link" href="#">
              Blog
            </a>
          </li>
          <li>
            <div id="list-for-start-btn">
              <a rel="noopener noreferrer" id="nav-btn" href="#">
                FREE START
              </a>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}
