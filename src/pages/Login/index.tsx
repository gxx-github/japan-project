"use client"

import type React from "react"
import { useEffect, useState } from "react"
import styles from "./index.less"
import { history } from "umi";
import { fetchLogin } from "@/api/home";
import { message } from "antd";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [messageApi,contextHolder] = message.useMessage();

  const generateHash = async (data: string) => {
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(data);
    const hashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  }



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Login attempt", { username, password })
    // 这里添加实际的登录逻辑
    // 假设 username 和 password 都为 "admin" 才算成功
    const Params = {
      "id": password, // nft id
      "nft_address": username, // 连接地址，默认
    }
    fetchLogin(Params)
      .then((res) => {
        messageApi.open({
          type: 'success',
          content: '领取成功',
        });
      
      })
      .catch(() => {
        messageApi.open({
          type: 'error',
          content: 'Request failed with status code 500',
        });

      });
  }
  useEffect(() => {
    // 示例用法
    generateHash('3UTiPP5EqDWGdyb3FYDBl').then(hash => {
      console.log('SHA-256 Hash:', hash);
      localStorage.setItem('token', hash)
      document.cookie = `access_token=${encodeURIComponent(hash)}`;
    });

    return () => {

    }
  }, [])


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

