import React from 'react';
import { User } from './types';

import './index.less';

interface UserListProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelet: (user: User,id:number) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onEdit ,onDelet}) => {
  return (
    <div className="user-list">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>
                <button onClick={() => onEdit(user)}>Edit</button>
                <button onClick={() => onDelet(user,user.id)} className="cancel-button">Delet</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;