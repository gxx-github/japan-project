import type React from "react"
import { useState, type ChangeEvent, type FormEvent } from "react"
import styles from './index.less'

interface FormData {
  image: File | null
  title: string
  intro: string
  startTime: string
  endTime: string
  token: string
}

const UploadForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    image: null,
    title: "",
    intro: "",
    startTime: "",
    endTime: "",
    token: "",
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
        image: e.target.files![0],
      }))
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the formData to your server
    console.log(formData)
  }

  return (
    <form className={styles["upload-form"]} onSubmit={handleSubmit}>
      <h2>Upload Form</h2>
      <div className={styles["form-group"]}>
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} />
      </div>
      <div className={styles["form-group"]}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={formData.title} onChange={handleInputChange} required />
      </div>
      <div className={styles["form-group"]}>
        <label htmlFor="intro">Introduction:</label>
        <textarea id="intro" name="intro" value={formData.intro} onChange={handleInputChange} required />
      </div>
      <div className={styles["form-group"]}>
        <label htmlFor="startTime">Start Time:</label>
        <input
          type="datetime-local"
          id="startTime"
          name="startTime"
          value={formData.startTime}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className={styles["form-group"]}>
        <label htmlFor="endTime">End Time:</label>
        <input
          type="datetime-local"
          id="endTime"
          name="endTime"
          value={formData.endTime}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className={styles["form-group"]}>
        <label htmlFor="token">Token:</label>
        <input type="text" id="token" name="token" value={formData.token} onChange={handleInputChange} required />
      </div>
      <button type="submit" className={styles["submit-button"]}>
        Submit
      </button>
    </form>
  )
}

export default UploadForm

