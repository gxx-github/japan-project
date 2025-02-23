"use client"

import type React from "react"
import { useState, useEffect } from "react"
import type { Event } from "./Event"
import styles from "./index.less"
import EventItem from "./EventItem"
import EventForm from "./EventForm"
import { fetchGetNftList } from "@/api/home";
import { history } from "umi";


const EventList: React.FC = () => {
    const TabList = ['Upcoming', 'Live', 'Ended']
    const [curChooise, setcurChooise] = useState(0)
    const [showListData, setshowListData] = useState([] as Event[])

    const [events, setEvents] = useState<Event[]>([])
    const [isAddingEvent, setIsAddingEvent] = useState(false)
    const [editingEvent, setEditingEvent] = useState<Event | null>(null)
    const handleTab = (index: number) => {
        setcurChooise(index)
    }
    const getNftListQuery = (state: number) => {
        const Params = {
            "state": state, // 0 未开始 1 进行中 2 已结束
            "page": 1,
            "limit": 50
        }
        fetchGetNftList(Params)
            .then((res) => {
                const data = res.data;
                const { nft } = data
                //   setshowListData(nft)
                setEvents(nft)

            })
            .catch(() => {
                setshowListData([])

            });
    }

    useEffect(() => {
        getNftListQuery(curChooise)
    }, [curChooise])


    const handleAddEvent = (newEvent: Omit<Event, "id">) => {
        const event: any = { ...newEvent, }
        setEvents([...events, event])
        setIsAddingEvent(false)
    }

    const handleEditEvent = (updatedEvent: Event) => {
        setEvents(events.map((event) => (event.id === updatedEvent.id ? updatedEvent : event)))
        setEditingEvent(null)
    }

    const handleDeleteEvent = (id: number) => {
        // setEvents(events.filter((event) => event.id !== id))
        console.log('====================================');
        console.log(id, 'iddddd');
        console.log('====================================');
    }
    const handleDodnLoadEvent = async (id: number,address:string) => {
        // setEvents(events.filter((event) => event.id !== id))
        console.log('====================================');
        console.log(id, 'iddddd');
        console.log('====================================');
        const downDataParams = {
          nft_id: Number(id), // Convert to Unix timestamp
          access_token:'3UTiPP5EqDWGdyb3FYDBl',
          address:address
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

    return (
        <div className={styles.eventList}>
            <div className={styles.tabs}>
                {
                    TabList.map((item, index) => {
                        return <button key={index} className={curChooise === index ? styles.active : ''} onClick={() => handleTab(index)} >{item}</button>
                    })
                }
            </div>
            <button onClick={() => {
                history.push('/uploadForm')
            }} className={styles.addButton}>
                Add Upload Nft
            </button>
            {isAddingEvent && <EventForm onSubmit={handleAddEvent} onCancel={() => setIsAddingEvent(false)} />}
            {editingEvent && (
                <EventForm event={editingEvent} onSubmit={handleEditEvent} onCancel={() => setEditingEvent(null)} />
            )}
            {events.map((event) => (
                <EventItem
                    key={event.id}
                    event={event}
                    onEdit={() => setEditingEvent(event)}
                    onDelete={() => handleDeleteEvent(event.id)}
                    onDownLoad={() => handleDodnLoadEvent(event.id,event.nft_address)}
                />
            ))}
        </div>
    )
}

export default EventList

