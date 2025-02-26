import React, { useContext, useEffect, useState } from 'react';

import { User } from './types';
import './index.less';
import AddUserForm from './AddUserForm';
import UserList from './UserList';
import EditUserForm from './EditUserForm';
import { InfoContext } from '@/components/InfoProvider';
import { fetchAddUser, fetchDelUser, fetchUserInfo, fetchUserList } from '@/api/home';

const UserDom: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, username: 'admin', password: 'admin123' },
    { id: 2, username: 'user', password: 'user123' },
  ]);
    const { userInfo }: any = useContext(InfoContext);
  
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [showAddForm, setShowAddForm] = useState(false); // 控制添加表单的显示
  //添加用户
  const handleAddUser = (newUser: Omit<User, 'id'>) => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    const Params = {
      "name": newUser.username,
      "pass_word": newUser.password
    }
    fetchAddUser(Params)
      .then((res) => {
        console.log('====================================');
        console.log(res,'增加用户');
        console.log('====================================');
      })
      .catch((err) => {
        setUsers([])
      });
    setShowAddForm(false); // 添加用户后隐藏表单
  };
  //编辑
  const handleUpdateUser = (updatedUser: User) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));

    setEditingUser(null);
  };
  //删除
  const handleDeleteUser = (user: User, id: number) => {
    console.log('====================================');
    console.log(user, '删除接口');
    console.log('====================================');
    const Params = {
      "name": user.username
    }
    fetchDelUser(Params)
      .then((res) => {
        console.log('====================================');
        console.log(res,'删除用户');
        console.log('====================================');
      })
      .catch((err) => {
        setUsers([])
      });
   
  };
  //取消编辑
  const handleCancelEdit = () => {
    setEditingUser(null); // 关闭编辑表单
  };
  //获取用户列表
  const getUserList = ()=>{
     const Params = {
          "name": userInfo || localStorage.getItem('user'), 
          "page": 1,
          "limit": 50
        }
        fetchUserList(Params)
          .then((res) => {
            console.log('====================================');
            console.log(res,'用户列表');
            console.log('====================================');
          })
          .catch((err) => {
            setUsers([])
          });
  }
  useEffect(() => {
    getUserList()
  
    return () => {
      
    }
  }, [])
  
  return (
    <div className="container">
      {/* <h1>User Management</h1> */}

      {/* 添加用户按钮 */}
      <button
        className="add-user-button"
        onClick={() => setShowAddForm(!showAddForm)}
      >
        {showAddForm ? 'Cancel' : 'Add User'}
      </button>

      {/* 添加用户表单 */}
      {showAddForm && <AddUserForm onAddUser={handleAddUser} />}

      {/* 用户列表 */}
      <UserList users={users} onEdit={setEditingUser} onDelet={handleDeleteUser} />

      {/* 编辑用户表单 */}
      {editingUser && <EditUserForm user={editingUser} onUpdateUser={handleUpdateUser} onCancel={handleCancelEdit} />}
    </div>
  );
};

export default UserDom;