import React, { useState } from "react";
import { SettingOutlined } from "@ant-design/icons";
import { Menu } from "antd";

const items = [
  {
    label: <a href="">Home page</a>,
    key: "start",
  },
  {
    label: <a href="/#/page">Sample page</a>,
    key: "page",
  },
  {
    label: "Submenu with pages",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Group 1",
        children: [
          {
            label: <a href="/#/page/1">Page one</a>,
            key: "setting:1",
          },
          {
            label: <a href="/#/page/2">Page two</a>,
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Group 2",
        children: [
          {
            label: "Only Option 3",
            key: "setting:3",
          },
          {
            label: "Only Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Open new tab
      </a>
    ),
    key: "alipay",
  },
];

const DemoMenuHorizontal = () => {
  const [current, setCurrent] = useState("mail");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default DemoMenuHorizontal;
