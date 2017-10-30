import React from "react";
import {connect} from "dva";
// import MyLayout from "../components/MyLayout";
import {Layout} from "antd";
const {Header,Footer,Sider,Content} = Layout;

const MainLayout = (prop) => (
     <div>
        <Layout>
           <Header>顶部导航</Header>
           <Content>Content</Content>
           <Footer>Footer</Footer>
        </Layout>
    </div>

)

export default MainLayout;
