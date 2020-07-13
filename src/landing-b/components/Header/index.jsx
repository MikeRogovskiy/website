import React from "react";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import "./Header.scss";
import StartBtn from "../../../components/StartBtn";
export default function Header(props) {
  const menu = (
    <Menu>
      <Menu.Item>English</Menu.Item>
      <Menu.Item>Русский</Menu.Item>
    </Menu>
  );

  return (
    <header className="Navbar fixed-bar">
      <div className="sticky-bar">
        <div className="logo-wrap">
          <h1 className="logo-main">EasyLang</h1>
          <Dropdown
            overlay={menu}
            placement="bottomLeft"
            arrow
            trigger={["click"]}
          >
            <Button
              style={{
                color: "#215599",
                fontWeight: "bold",
                marginLeft: "5%",
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
              <a
                className="menu-nav__link"
                href="/plans"
                style={{ color: "#215599" }}
              >
                Premium Account
              </a>
            </li>
            <li className="menu-item">
              <a
                className="menu-nav__link"
                href="#"
                style={{ color: "#215599" }}
              >
                Watch &amp; Learn
              </a>
            </li>
            <li className="menu-item">
              <a
                className="menu-nav__link"
                href="#"
                style={{ color: "#215599" }}
              >
                Read &amp; Learn
              </a>
            </li>
            <li className="menu-item">
              <a
                className="menu-nav__link"
                href="/blog"
                style={{ color: "#215599" }}
              >
                Blog
              </a>
            </li>
            <li>
              <div id="list-for-start-btn">
                <a
                  rel="noopener noreferrer"
                  id="nav-btn"
                  href="#"
                  style={{ color: "#215599" }}
                >
                  FREE START
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
