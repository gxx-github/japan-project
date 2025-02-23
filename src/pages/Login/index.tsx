"use client"

import type React from "react"
import { useState } from "react"
import styles from "./index.less"
import { history } from "umi";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Login attempt", { username, password })
    // 这里添加实际的登录逻辑
    // 假设 username 和 password 都为 "admin" 才算成功
    if (password === "3UTiPP5EqDWGdyb3FYDBl") {
      localStorage.setItem("isLogin", "3UTiPP5EqDWGdyb3FYDBl")
      history.push('/list')
    } else {
      alert("用户名或密码错误")
    }
  }

  return (
    <div className={styles.loginContainer}>
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

