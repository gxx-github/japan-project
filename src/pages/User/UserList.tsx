import React, { useContext } from 'react';
import { User } from './types';

import './index.less';
import { InfoContext } from '@/components/InfoProvider';

interface UserListProps {
  users: User[];
  onEdit: (user: User) => void;
  onDelet: (user: User,id:number) => void;
}

const UserList: React.FC<UserListProps> = ({ users, onEdit ,onDelet}) => {
      const { userInfo }: any = useContext(InfoContext);
  
  return (
    <div className="user-list">
      <table>
        <thead>
          <tr>
            <th>Num</th>
            <th>Username</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { users.length!==0 && users.map((user,index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>
                <button onClick={() => onEdit(user)} disabled={user.username === userInfo}>Edit</button>
                <button onClick={() => onDelet(user,user.id)} className="cancel-button" disabled={user.username === userInfo}>Delet</button>
              </td>
            </tr>
          )) 
        }
        </tbody>
      </table>
      {users.length === 0 && <div className="empty">No users found.</div>}
    </div>
  );
};

export default UserList;