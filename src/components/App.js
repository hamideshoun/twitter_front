import React from "react";

import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";
// import Activity from "./ActivityPage";

import EditRounded from '@material-ui/icons/EditRounded';
import HomeRounded from '@material-ui/icons/HomeRounded';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
  
import {
    Layout,
    Menu,
} from 'antd';

const {
    Content, Footer, Sider,
} = Layout;

class Home extends React.Component {
    constructor(props){
      super(props);
      this.setIsLogin = this.setIsLogin.bind(this);
      this.state = {isLogin: !!localStorage.getItem('id')}
    }
    setIsLogin(){
      this.setState({isLogin: !!localStorage.getItem('id')})
    }
    render() {
        return (
            <Router>
                <Layout>
                    <Sider breakpoint="lg" collapsedWidth="0">
                            <Menu theme="dark" mode="inline">
                            <Menu.Item key="1">
                                <Link to="/">
                                <HomeRounded />
                                    <span className="nav-text">Home</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/new">
                                <EditRounded />
                                    <span className="nav-text">New Tweet</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to="/activity">
                                <EditRounded />
                                    <span className="nav-text">Activity</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item id='login_id' key="5" hidden={this.state.isLogin}>
                              <Link to="/login">
                                <EditRounded />
                                <span className="nav-text">Login</span>
                              </Link>
                            </Menu.Item>
                            <Menu.Item id='logout_id' key="6" hidden={!this.state.isLogin}>
                              <Link to="/login" onClick={()=>this.setState({isLogin: !!!localStorage.getItem('id')})}>
                                <EditRounded />
                                <span className="nav-text">Logout</span>
                              </Link>
                            </Menu.Item>
                            </Menu>
                    </Sider>
                    <Layout style={{minHeight: '100vh' }}>
                        <Content style={{ margin: '24px 16px 0' }}>
                            <div style={{ padding: 24, background: '#fff', minHeight: '100vh' }}>
                            <Switch>
                                <Route path="/login" component={Login} setIsLogin={this.setIsLogin}/>
                                <Route path="/register" component={Register} />
                                <Route path="/" exact component={Dashboard} />
                                <Route path="/tweet/:id" component={TweetPage} />
                                <Route path="/new" component={NewTweet} />
                                {/* <Route path="/activity" component={Activity} /> */}
                            </Switch>
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Erfan ghobadian & Shahriar morabi & Hamid Elahi ©2021</Footer>
                    </Layout>
                </Layout>
            </Router>
        );
    }
}
export default Home;
