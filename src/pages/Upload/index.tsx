import type React from "react"
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react"
import styles from './index.less'
import { fetchCreatNft, fetchExport } from "@/api/home"
import { message } from "antd";
import { history } from "umi";


interface FormData {
  logo: string
  nft_name: string
  info: string
  start_timestamp: number
  end_timestamp: number
  nft_address: string
}

const UploadForm: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const [formData, setFormData] = useState<FormData>({
    logo: '',
    nft_name: "",
    info: "",
    start_timestamp: 0,
    end_timestamp: 0,
    nft_address: ''
  })
  const [downData, setdownData] = useState({
    nft_id: '',
    address: '',
    access_token: ''
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  const handleInputChange1 = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setdownData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }



  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
    const formDataToSubmit = {
      ...formData,
      start_timestamp: new Date(formData.start_timestamp).getTime() / 1000, // Convert to Unix timestamp
      end_timestamp: new Date(formData.end_timestamp).getTime() / 1000, // Convert to Unix timestamp
    };
    fetchCreatNft(formDataToSubmit)
      .then((res) => {
        messageApi.open({
          type: 'success',
          content: '领取成功',
        });
        history.push('/list')
      })
      .catch(() => {

      });
  }
  const handleSubmit1 = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(downData)
    const downDataParams = {
      ...downData,
      nft_id: Number(downData.nft_id), // Convert to Unix timestamp
    };
    try {
      const response = await fetch("http://47.243.86.140:40071/privasea/export", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 如果需要，在这里添加认证头
        },
        body: JSON.stringify(downDataParams),
      })
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.style.display = "none"
      a.href = url
      a.download = "data.xlsx"
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Download failed:", error)
      alert("Download failed. Please try again later.")
    } finally {

    }




  }

  useEffect(() => {
    if (!localStorage.getItem('isLogin')) {
      history.push('/login')
    }

    return () => {

    }
  }, [localStorage.getItem('isLogin')])

  return (
    <>
      {contextHolder}
      <form className={styles["upload-form"]} onSubmit={handleSubmit}>
        <h2>Upload Form</h2>
        <div className={styles["form-group"]}>
          <label htmlFor="nft_name">logo:</label>
          <input type="text" id="logo" name="logo" value={formData.logo} onChange={handleInputChange} required />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="nft_name">nft_name:</label>
          <input type="text" id="nft_name" name="nft_name" value={formData.nft_name} onChange={handleInputChange} required />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="nft_address">nft_address:</label>
          <input type="text" id="nft_address" name="nft_address" value={formData.nft_address} onChange={handleInputChange} required />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="info">infoduction:</label>
          <textarea id="info" name="info" value={formData.info} onChange={handleInputChange} required />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="start_timestamp">Start Time:</label>
          <input
            type="datetime-local"
            id="start_timestamp"
            name="start_timestamp"
            value={formData.start_timestamp}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="end_timestamp">End Time:</label>
          <input
            type="datetime-local"
            id="end_timestamp"
            name="end_timestamp"
            value={formData.end_timestamp}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* <div className={styles["form-group"]}>
          <label htmlFor="access_token">access_token:</label>
          <input type="text" id="access_token" name="access_token" value={formData.access_token} onChange={handleInputChange} required />
        </div> */}
        <button type="submit" className={styles["submit-button"]}>
          Submit
        </button>
      </form>

      {/* <form className={styles["download-form"]} onSubmit={handleSubmit1}>
        <h2>DownLoad Excel</h2>
        <div className={styles["form-group"]}>
          <label htmlFor="nft_id">nft_id:</label>
          <input type="text" id="nft_id" name="nft_id" value={downData.nft_id} onChange={handleInputChange1} />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="address">nft_address:</label>
          <input type="text" id="address" name="address" value={downData.address} onChange={handleInputChange1} required />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="access_token">access_token:</label>
          <input type="text" id="access_token" name="access_token" value={downData.access_token} onChange={handleInputChange1} required />
        </div>
        <button type="submit" className={styles["submit-button"]}>
          DownLoad Excel
        </button>
      </form> */}




    </>

  )
}

export default UploadForm

