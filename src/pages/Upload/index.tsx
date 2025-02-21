import type React from "react"
import { useState, type ChangeEvent, type FormEvent } from "react"
import styles from './index.less'
import { fetchCreatNft } from "@/api/home"

interface FormData {
  logo: File | null
  nft_name: string
  info: string
  start_timestamp: number
  end_timestamp: number
  access_token: string
  nft_address:string
}

const UploadForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    logo: null,
    nft_name: "",
    info: "",
    start_timestamp: 0,
    end_timestamp: 0,
    access_token: "",
    nft_address:''
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prevState) => ({
        ...prevState,
        logo: e.target.files![0],
      }))
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the formData to your server
    console.log(formData)
    const formDataToSubmit = {
      ...formData,
      start_timestamp: new Date(formData.start_timestamp).getTime() / 1000, // Convert to Unix timestamp
      end_timestamp: new Date(formData.end_timestamp).getTime() / 1000, // Convert to Unix timestamp
    };
    fetchCreatNft(formDataToSubmit)
      .then((res) => {
     
      })
      .catch(() => {

      });
  }

  return (
    <form className={styles["upload-form"]} onSubmit={handleSubmit}>
      <h2>Upload Form</h2>
      <div className={styles["form-group"]}>
        <label htmlFor="logo">logo:</label>
        <input type="file" id="logo" name="logo" accept="image/*" onChange={handleImageChange} />
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
      <div className={styles["form-group"]}>
        <label htmlFor="access_token">access_token:</label>
        <input type="text" id="access_token" name="access_token" value={formData.access_token} onChange={handleInputChange} required />
      </div>
      <button type="submit" className={styles["submit-button"]}>
        Submit
      </button>
    </form>
  )
}

export default UploadForm

