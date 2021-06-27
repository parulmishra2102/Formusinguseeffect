import { Layout, Menu,Row, Col } from 'antd';
const { Header, Content } = Layout;
const Header2 = (props)=>{
    const logedOut=()=>{
       props.logOut()


    }

    return (
        <>
        <Header className='header2'>

        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">about</Menu.Item>
        <Menu.Item key="2">user</Menu.Item>
        <Menu.Item key="3" onClick={logedOut}>logout</Menu.Item>
      </Menu>
        </Header>
        </>
    )
}
export default Header2