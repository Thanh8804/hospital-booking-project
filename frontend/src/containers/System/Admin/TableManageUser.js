import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from "../../../store/actions"
import './TableManageUser.scss'

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';





// Initialize Markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
function handleEditorChange({ html, text }) {
    console.log('handleEditorChange', html, text);
}

class TableManageUser extends Component {

    // Constructor to initialize state and bind methods
    constructor(props) {
        super(props);
        this.state = {
            usersRedux: []
        }
    }

    componentDidMount() {
        this.props.fetchUserRedux();
        
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.listUsers !== this.props.listUsers){
            this.setState({
                usersRedux: this.props.listUsers
            })
        }
    }
    handleOnDeleteUser = (user) => {
            this.props.deleteUserRedux((user.id));
    }      
    handleEditUser = (user) => {
            this.props.handleEditUserFromParentKey(user);
    }    
    render() {
        let arrUsers = this.state.usersRedux;
        return (
            <React.Fragment>
                <table id="TableManageUser">
                    <tbody>
                        <tr>
                            <th>Email</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>
                        {arrUsers && arrUsers.length >0 &&
                            arrUsers.map((item,index)=>{
                                return (
                                    <tr key={index}>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button 
                                                onClick={() => this.handleEditUser(item)}
                                                className="btn-edit"><i className="fas fa-pencil-alt"></i></button>
                                            <button 
                                                onClick={()=> this.handleOnDeleteUser(item)}
                                                className="btn-delete"><i className="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <MdEditor
                    style={{ height: '500px' }}
                    renderHTML={text => mdParser.render(text)}
                    onChange={handleEditorChange}
                    value="**Hello world!**"
                />
            </React.Fragment>

        );
    }

}

const mapStateToProps = state => {
    return {
        listUsers: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
        deleteAUserRedux: (id) => dispatch(actions.deleteAUser(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
