import React, { Component } from 'react';

export default class SideBar extends Component{

    constructor(){
        super();

        this.state = {
            homeCls:"active",
            aboutCls:"inactive",
            pagesCls:"inactive"
        };

        // this.toggleActive = this.toggleActive.bind(this);
    }

    

    styles = {
        
    };

    render() {
        return(
            <div className="wrapper">
                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3>Bootstrap Sidebar</h3>
                    </div>

                    <ul className="list-unstyled components">
                        <p>Admin</p>
                        <li className={this.state.homeCls} onClick={this.toggleActive.bind(this, "home")} >
                            <a>Home</a>
                        </li>
                        <li className={this.state.aboutCls} onClick={this.toggleActive.bind(this,"about")}>
                            <a>About</a>
                        </li>
                        <li className={this.state.pageCls} onClick={this.toggleActive.bind(this, "pages")}>
                            <a>Pages</a>
                        </li>
                    </ul>
                </nav>

            </div>
            
        );
    }

    toggleActive(btn)
    {

        if(btn === "home")
        {
            this.setState({ homeCls: "active", aboutCls: "inactive", pageCls: "inactive"});
        }
        else if(btn === "about")
        {
            this.setState({ homeCls: "inactive", aboutCls: "active", pageCls: "inactive"});
        }
        else if(btn === "pages")
        {
            this.setState({ homeCls: "inactive", aboutCls: "inactive", pageCls: "active"});
        }
        else
        {
            this.setState({ homeCls: "inactive", aboutCls: "inactive", pageCls: "inactive"});
        }
    }

}