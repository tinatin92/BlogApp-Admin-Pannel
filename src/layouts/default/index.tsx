// import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Link, Outlet } from "react-router";

const { Header, Content, Sider } = Layout;

const items2: MenuProps["items"] = [
  {
    key: `users`,
    label: `Users`,
    children: [
      {
        key: 0,
        label: <Link to="/users">Users</Link>,
      },
    ],
  },
  {
    key: `blogs`,
    label: `Blogs`,
    children: [
      {
        key: 1,
        label: <Link to="/blogs">Blogs</Link>, // Link to the blogs page
      },
    ],
  },
];

const DefaultLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          //   items={items1}
          style={{ flex: 1, minWidth: 0 }}
        /> */}
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb
            items={[{ title: "Home" }, { title: "List" }, { title: "App" }]}
            style={{ margin: "16px 0" }}
          />
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: "100vh",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
