import styles from "./index.less";
import classnames from "classnames";
import { judgeIsMobile } from "@/utils";
import { useEffect, useState } from "react";
import EmptyDom from "@/components/EmptyDom";
import { history } from "umi";


interface ListItem {
  img: string;
  des: string;
  title: string;
  start_time: number;
  end_time: number;
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
  useEffect(() => {
    switch (curChooise) {
      case 1:
        setshowListData(mockList1)
        break;
      case 2:
        setshowListData(mockList1)
        break;
    
      default :
      setshowListData(mockList0)
        break;
    }
  
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
                  <img src={item.img} alt="" />
                  <div className={styles.start}>開始日時:
                    <span></span></div>
                  <div className={styles.end} >終了日時:
                    <span></span></div>
                </div>
                <div className={styles.rightDom} >
                  <div className={styles.titDom} >
                    <div className={styles.tit}>{item.title}</div>
                   <span>
                   <div className={styles.show}>
                      残り3日
                    </div>
                    <div className={styles.button} onClick={()=>{
                      history.push('/toConnect') 
                    }}>申し込み終了</div>
                   </span>
                  </div>
                  <div className={styles.des} >{item.des}</div>
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
