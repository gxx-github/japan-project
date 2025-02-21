import styles from "./index.less";
import classnames from "classnames";
import { judgeIsMobile } from "@/utils";
import { useEffect, useState } from "react";
import EmptyDom from "@/components/EmptyDom";
import { history } from "umi";
import { fetchGetNftList } from "@/api/home";
import moment from 'moment';
import {  TimerDom } from "@/components/Timer";

interface ListItem {
  info: string;
  nft_name: string;
  nft_address: string;
  logo: string;
  start_timestamp: number;
  end_timestamp: number;
}

const HomePage = () => {
  const TabList = ['Upcoming', 'Live', 'Ended']
  const [curChooise, setcurChooise] = useState(0)
  const handleTab = (index: number) => {
    setcurChooise(index)
  }
  const [showListData, setshowListData] = useState([] as ListItem[])
  const mockList0 = [
    
  ] as ListItem[]
  const mockList1 = [
    {
      img: 'https://www.trias.one/static/swiper2@2x.3767a38b.png',
      des: 'PRIVASEAは、ブロックチェーンの匿名性をAIで解除するためのインテリジェント・トゥ・アーン・トークンです。',
      title: 'PRIVASEA',
      start_time: 1739969108,
      end_time: 1740141908,
    },
    {
      img: 'https://www.trias.one/static/swiper2@2x.3767a38b.png',
      des: 'Arkham (ARKM)は、ブロックチェーンの匿名性をAIで解除するためのインテリジェント・トゥ・アーン・トークンです。',
      title: 'Trias One',
      start_time: 1739969108,
      end_time: 1740141908,
    },
  ]
  const mockList2 = [
    {
      img: 'https://www.trias.one/static/swiper2@2x.3767a38b.png',
      des: 'PRIVASEAは、ブロックチェーンの匿名性をAIで解除するためのインテリジェント・トゥ・アーン・トークンです。',
      title: 'PRIVASEA',
      start_time: 1739969108,
      end_time: 1740141908,
    },
    {
      img: 'https://www.trias.one/static/swiper2@2x.3767a38b.png',
      des: 'Arkham (ARKM)は、ブロックチェーンの匿名性をAIで解除するためのインテリジェント・トゥ・アーン・トークンです。',
      title: 'Trias One',
      start_time: 1739969108,
      end_time: 1740141908,
    },
  ]
  const getNftListQuery = (state:number)=>{
    const Params = {
      "state":state, // 0 未开始 1 进行中 2 已结束
      "page":1,
      "limit":50
    }
    fetchGetNftList(Params)
      .then((res) => {
        const res1 = {
          "code": "0000",
          "msg": "Success",
          "total":10,
          "data": 
          {
            "nft": [
              {
                "info": "bababalalala简介",
                "nft_name": "nft 名称",
                "nft_address": "0x...",
                "logo": "logo图片",
                "start_timestamp": 1740138775, // 开始时间
                "end_timestamp": 1740225175 // 结束时间
              }, 
            
            ],
        
          }
        }
        const data = res1.data;
        const {nft} = data
        setshowListData(nft)
      })
      .catch(() => {
        setshowListData([ ])

      });
  }
  const onZero = ()=>{

  }
  useEffect(() => {
    getNftListQuery(curChooise)
    return () => {
      
    }
  }, [curChooise])
  
  return (
    <section
      className={classnames(
        styles.mainContent,
        !judgeIsMobile() ? "" : styles.mobile
      )}
    >
      <div className={styles.commonSection}>
        <div className={styles.tabs} >
          {
            TabList.map((item, index) => {
              return <div key={index} className={curChooise === index ? styles.active : ''} onClick={() => handleTab(index)} >{item}</div>
            })
          }
        </div>
        <div className={styles.content} >
          {
           showListData.length !== 0 ?  showListData.map((item, index) => {
              return <div className={styles.itemDom} key={index} >
                <div className={styles.leftDom} >
                  <img src={item.logo} alt="" />
                  <div className={styles.start}>開始日時:
                    <span>{item.start_timestamp &&  moment(item.start_timestamp*1000).format('YYYY-MM-DD HH:mm') }</span>
                    <span>{item.start_timestamp &&  moment(1678990000000).format('YYYY-MM-DD HH:mm') }</span>
                    </div>
                  <div className={styles.end} >終了日時:
                    <span>{item.end_timestamp &&  moment(item.end_timestamp*1000).format('YYYY-MM-DD HH:mm') }</span></div>
                </div>
                <div className={styles.rightDom} >
                  <div className={styles.titDom} >
                    <div className={styles.tit}>{item.nft_name}</div>
                   <span>
                    {
                      curChooise === 0 &&   <div className={styles.show}>
                      残り <TimerDom timer={item.start_timestamp} onZero={onZero} shouwDay={true} ></TimerDom> 日
                    </div>
                    }
                 
                    {
                      curChooise === 0 ?   <div className={styles.button0} >申し込み終了</div> :   <div className={styles.button} onClick={()=>{
                        history.push('/toConnect') 
                      }}>申し込み終了</div>
                    }
                  
                   </span>
                  </div>
                  <div className={styles.des} >{item.info}</div>
                </div>
              </div>
            })
            : <EmptyDom type={curChooise} ></EmptyDom>
          }
        </div>

      </div>
    </section>
  );
};
export default HomePage;
