import React from "react";
import { Button, Space } from "antd";

const DemoButtonStates = () => (
  <Space direction="vertical">
    <Space wrap>
      <Button type="primary" style={{ margin: 40 }}>
        Primary
      </Button>
      <Button type="primary" disabled>
        Primary(disabled)
      </Button>
    </Space>
  </Space>
);

export default DemoButtonStates;
