import React, { useState } from "react";
import { PoweroffOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href=""
      >
        demo start page
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="/#/page"
      >
        sample page
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="/#/page/1"
      >
        sample page 1
      </a>
    ),
  },
];

const DemoActionButtons = () => {
  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };
  return (
    <Space direction="vertical">
      <Space direction="vertical">
        <Space wrap>
          <Dropdown menu={{ items }} placement="bottomLeft">
            <Button style={{ margin: 40 }}>Show content on hover</Button>
          </Dropdown>
          <Button
            type="primary"
            icon={<PoweroffOutlined />}
            loading={loadings[1]}
            onClick={() => enterLoading(1)}
          >
            Trigger action on Click!
          </Button>
        </Space>
      </Space>
    </Space>
  );
};

export default DemoActionButtons;
