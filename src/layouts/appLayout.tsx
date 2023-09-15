import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer } = Layout;

type Props={
    children:React.ReactNode
}
const AppLayout: React.FC<Props> = ({children}) => {

  return (
    <Layout>
      {/* <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(3).fill(null).map((_, index) => ({
            key: String(index + 1),
            label: `nav ${index + 1}`,
          }))}
        />
      </Header> */}
      {/* <Content className="site-layout"> */}
      {children}
      {/* </Content> */}
      <Footer style={{ textAlign: 'center' }}>2023 IRYD, all Rights reserved </Footer>
    </Layout>
  );
};

export default AppLayout;