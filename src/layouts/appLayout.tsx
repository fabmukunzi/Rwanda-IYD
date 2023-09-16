import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Cheader from '../components/header';

const { Header, Content, Footer } = Layout;

type Props = {
  children: React.ReactNode;
};
const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <Layout>
      <Header
        style={{
          position: 'fixed',
          top: 0,
          zIndex: 50,
          width: '100%',
        }}
        className="bg-white h-20 py-2"
      >
        <Cheader />
      </Header>
      <Content className="site-layout">{children}</Content>
      {/* <Footer style={{ textAlign: 'center' }}>
        2023 IRYD, all Rights reserved{' '}
      </Footer> */}
    </Layout>
  );
};

export default AppLayout;
