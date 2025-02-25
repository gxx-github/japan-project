import React, { useState } from 'react';

import { User } from './types';
import './index.less';
import AddUserForm from './AddUserForm';
import UserList from './UserList';
import EditUserForm from './EditUserForm';

const UserDom: React.FC = () => {
    const [users, setUsers] = useState<User[]>([
        { id: 1, username: 'admin', password: 'admin123' },
        { id: 2, username: 'user', password: 'user123' },
      ]);
      const [editingUser, setEditingUser] = useState<User | null>(null);
      const [showAddForm, setShowAddForm] = useState(false); // 控制添加表单的显示
    
      const handleAddUser = (newUser: Omit<User, 'id'>) => {
        setUsers([...users, { ...newUser, id: users.length + 1 }]);
        setShowAddForm(false); // 添加用户后隐藏表单
      };
    
      const handleUpdateUser = (updatedUser: User) => {
        setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
        setEditingUser(null);
      };
      const handleDeleteUser = (user: User,id:number) => {
        console.log('====================================');
        console.log(user,'删除接口');
        console.log('====================================');
        setUsers(users.filter((user) => user.id !== id)); // 过滤掉被删除的用户
      };
      const handleCancelEdit = () => {
        setEditingUser(null); // 关闭编辑表单
      };
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
          <UserList users={users} onEdit={setEditingUser} onDelet={handleDeleteUser}/>
    
          {/* 编辑用户表单 */}
          {editingUser && <EditUserForm user={editingUser} onUpdateUser={handleUpdateUser} onCancel={handleCancelEdit} />}
        </div>
      );
};

export default UserDom;