import React from 'react';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {Layout, Menu, Breadcrumb } from 'antd';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Lodi from '../images/52975-under-construction.json'
import Lodi2 from '../images/101304-construction.json'
import Lodi3 from '../images/101481-construction-website.json'
import lodi4 from  '../images/41111-man-filling-a-survey-with-a-woman-watching-at-5-star-feedback-dialog.json'
import {
 
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    PoweroffOutlined,
    HomeOutlined,
    FileTextOutlined,
  } from '@ant-design/icons';
  
  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;

class  DashBoard extends React.Component {
    state = {
        category:'Home',
        collapsed: false,
        type:"",
      };
    

      passprops=(a,b)=>{
          this.setState({
              category:a,
              type:b,
          })

      }

      onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };

  render() {
    const { collapsed } = this.state;
    return (
        <Layout style={{ minHeight: '100vh' }}>
         
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1"  onClick={()=>this.passprops("Home","Admin")} icon={<HomeOutlined />} >
             DashBoard
            </Menu.Item>
            <Menu.Item key="2"  onClick={()=>this.passprops("Profile","Admin")} icon={<UserOutlined />}>
               Profile
            </Menu.Item>
            <SubMenu key="sub1" icon={<FileTextOutlined />} title="Forms">
              <Menu.Item  onClick={()=>this.passprops("Create Form","Admin")} key="3">Create Form</Menu.Item>
              <Menu.Item key="4"  onClick={()=>this.passprops("Responses","Admin")}>Form Responses</Menu.Item>
              
            </SubMenu>
           
            <Menu.Item key="9" onClick={()=>this.passprops("Logout","Admin")} icon={<PoweroffOutlined />}>
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
        
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
               
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 580 }}>
              <ContentDisplay screen={this.state.category}/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}


function ContentDisplay(props){
   
   if(props.screen==="Responses"){
            return(
  
                    <Player
                        autoplay
                        loop
                        src={Lodi}
                        style={{ height: '500px', width: '500px' }}
                      >
                    
                    </Player>

              )
    }
    if(props.screen==="Create Form"){
        return(

                <Player
                    autoplay
                    loop
                    src={Lodi3}
                    style={{ height: '500px', width: '500px' }}
                  >
                
                </Player>

        )

       
    }

    if(props.screen==="Home"){
        return(

                <Player
                    autoplay
                    loop
                    src={lodi4}
                    style={{ height: '500px', width: '500px' }}
                  >
                
                </Player>

        )

       
    }


    if(props.screen==="Profile"){
        return(

                <Player
                    autoplay
                    loop
                    src={Lodi2}
                    style={{ height: '500px', width: '500px' }}
                  >
                
                </Player>

        )
    }
}

export default DashBoard;