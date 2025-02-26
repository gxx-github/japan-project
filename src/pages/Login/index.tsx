"use client"

import type React from "react"
import { useContext, useEffect, useState } from "react"
import styles from "./index.less"
import { history } from "umi";
import { fetchLogin } from "@/api/home";
import { message } from "antd";
import CryptoJS from 'crypto-js';
import { InfoContext } from "@/components/InfoProvider";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [messageApi,contextHolder] = message.useMessage();
    const { setuserInfo }: any = useContext(InfoContext);

  const generateHash = async (data: string) => {
    // const encoder = new TextEncoder();
    // const dataBuffer = encoder.encode(data);
    // const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
    // const hashArray = Array.from(new Uint8Array(hashBuffer));
    // const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    const hash = CryptoJS.SHA256(data).toString();

    return hash;
  }


useEffect(() => {

// 原始 token
// const originalToken = 'd772d624c79f4919869227dbdfed6d11cef63073f5de44e0b3c906d7b33a88f8';
// // 1. 计算 SHA-256 哈希
// const hashedToken = CryptoJS.SHA256(originalToken).toString();
// // 2. 获取最后 20 个字节
// const last20Chars = hashedToken.slice(-40);
// // 3. 转换为小写十六进制格式
// const accessToken = last20Chars.toLowerCase();

// console.log('原始 Token:', originalToken);
// console.log('哈希 Token:', hashedToken);
// console.log('20字节:', last20Chars);
// console.log('Access Token:', accessToken);


  return () => {
    
  }
}, [])


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Login attempt", { username, password })
    // 这里添加实际的登录逻辑
    // 假设 username 和 password 都为 "admin" 才算成功
 
    generateHash(password).then(hash => {
      localStorage.setItem('token',hash)
      document.cookie = `access_token=${encodeURIComponent(hash)}`;
      const Params = {
        name:username,
        pass_word:password
      }
      fetchLogin(Params)
      .then((res) => {
        messageApi.open({
          type: 'success',
          content: '登录成功',
        });
        setuserInfo(username)
        localStorage.setItm('user',username)
        localStorage.setItem('isLogin','true')
        history.push('/admin')
      
      })
      .catch(() => {
        messageApi.open({
          type: 'error',
          content: 'Request failed ',
        });
        localStorage.setItem('isLogin','false')


      });
    }).catch(()=>{
      messageApi.open({
        type: 'error',
        content: '',
      });
    })
   
  }

  return (
    <div className={styles.loginContainer}>
      {contextHolder}
      <div className={styles.loginBox}>
        <h2 className={styles.title}>登录</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="username">用户名</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">密码</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.loginButton}>
            登录
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage

