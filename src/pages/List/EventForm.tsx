"use client"

import type React from "react"
import { useState, useEffect, type ChangeEvent, type FormEvent } from "react"
import type { Event } from "./Event"
import styles from "./index.less"
import { fetchCreatNft, fetchExport } from "@/api/home"
import moment from 'moment';

interface FormData {
    spend: string
    nft_name: string
    info: string
    start_timestamp: number
    end_timestamp: number
    access_token?: string
    nft_address: string
}
interface EventFormProps {
    event?: Event
    onSubmit: (event: any) => void
    onCancel: () => void
}

const EventForm: React.FC<EventFormProps> = ({ event, onSubmit, onCancel }) => {
    console.log(event,'editEvent');
    
    const [formData, setFormData] = useState<FormData>({
        spend: '',
        nft_name: "",
        info: "",
        start_timestamp: 0,
        end_timestamp: 0,
        access_token: "",
        nft_address: ''
    })

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formData)
        // const formDataToSubmit = {
        //     ...formData,
        //     start_timestamp: new Date(formData.start_timestamp).getTime() / 1000, // Convert to Unix timestamp
        //     end_timestamp: new Date(formData.end_timestamp).getTime() / 1000, // Convert to Unix timestamp
        // };
        // fetchCreatNft(formDataToSubmit)
        //     .then((res) => {
        //         alert('创建成功')
        //     })
        //     .catch(() => {

        //     });
    }
    useEffect(() => {
        if(event){
          setFormData(event)
        }
    
      return () => {
        
      }
    }, [event])
    

    return (
        <form className={styles["upload-form"]} onClick={onSubmit}>
             <div className={styles["form-con"]}>
            <h2>Edit Form</h2>
            <div className={styles["form-group"]}>
                <label htmlFor="nft_name">logo:</label>
                <input type="text" id="logo" name="logo" value={formData.spend} onChange={handleInputChange} required />
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
                    value={moment(formData.start_timestamp*1000).format('YYYY-MM-DDTHH:mm')}
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
                    value={moment(formData.end_timestamp*1000).format('YYYY-MM-DDTHH:mm')}
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
            </div>
        </form>
    )
}

export default EventForm

