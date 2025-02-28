import styles from "./index.less";
import classnames from "classnames";
import { judgeIsMobile } from "@/utils";
import { useContext, useEffect, useState } from "react";
import EmptyDom from "@/components/EmptyDom";
import { history } from "umi";
import { fetchGetNftList } from "@/api/home";
import moment from 'moment';
import { TimerDom } from "@/components/Timer";
import { InfoContext } from "@/components/InfoProvider";
import { useAccount } from "wagmi";
import { message } from "antd";

interface ListItem {
  info: string;
  nft_name: string;
  nft_address: string;
  spend: string;
  start_timestamp: number;
  end_timestamp: number;
}

const HomePage = () => {
  const TabList = ['Upcoming', 'Live', 'Ended']
  const { setNftInfo,curChooise, setcurChooise }: any = useContext(InfoContext);
    const { address: account } = useAccount();
    const [messageApi, contextHolder] = message.useMessage();

  const handleTab = (index: number) => {
    setcurChooise(index)
  }
  const [showListData, setshowListData] = useState([] as ListItem[])

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
        setshowListData(nft)
        // setshowListData([])

      })
      .catch((err) => {
        setshowListData([])
        messageApi.open({
          type: 'error',
          content: err.message,
      });
      });
  }
  const onZero = () => {
    getNftListQuery(curChooise)

  }
  useEffect(() => {
    getNftListQuery(curChooise)
    return () => {

    }
  }, [curChooise])

  return (
    <section
      className={classnames(
        !judgeIsMobile() ? styles.mainContent : styles.mobile
      )}
    >
        {contextHolder}
      <div className={styles.commonSection}>
        <div className={styles.tabs} >
          {
            TabList.map((item, index) => {
              return <div key={index} className={curChooise === index ? styles.active : ''} onClick={() => handleTab(index)} >{item}</div>
            })
          }
        </div>
        <div  className={ curChooise===0 && showListData.length === 0 ? styles.content1 : styles.content }  >
          {
            showListData.length !== 0 ? showListData.map((item, index) => {
              return <div className={styles.itemDom} key={index} >
                <div className={styles.leftDom} >
                  <img src={item.spend} alt="" />
                  <div className={styles.start}>開始日時:
                    <span>{item.start_timestamp && moment(item.start_timestamp * 1000).format('YYYY-MM-DD HH:mm')}</span>
                  </div>
                  <div className={styles.end} >終了日時:
                    <span>{item.end_timestamp && moment(item.end_timestamp * 1000).format('YYYY-MM-DD HH:mm')}</span></div>
                </div>
                <div className={styles.rightDom} >
                  <div className={styles.titDom} >
                    <div className={styles.tit}>{item.nft_name}</div>
                    {
                      !judgeIsMobile() &&   <span>
                      {
                        curChooise === 0 && <div className={styles.show}>
                          開始まで：
                          <TimerDom timer={item.start_timestamp} onZero={onZero} shouwDay={true} ></TimerDom> 
                        </div>
                      }
                      {
                        curChooise === 1 && <div className={styles.show}>
                          残り:
                          <TimerDom timer={item.end_timestamp} onZero={onZero} shouwDay={true}  ></TimerDom> 
                        </div>
                      }
                      {
                        curChooise === 0 ? <div className={styles.button0} >まだ開始していません</div> : curChooise === 1 ? <div className={styles.button} onClick={() => {
                          if(account){
                            history.push('/toClaim')

                          }else{
                            history.push('/toConnect')

                          }
                          setNftInfo(item)
                        }}>申し込み中</div> : <div className={styles.button0} >終了しました</div>
                      }


                    </span>
                    }
                  
                  </div>
                  <div className={styles.des} >{item.info}</div>
                  <div className={styles.timer}>
                  {
                      judgeIsMobile() &&   <span>
                      {
                        curChooise === 0 && <div className={styles.show}>
                          開始まで：
                          <TimerDom timer={item.start_timestamp} onZero={onZero} shouwDay={true} ></TimerDom> 
                        </div>
                      }
                      {
                        curChooise === 1 && <div className={styles.show}>
                          残り:
                          <TimerDom timer={item.end_timestamp} onZero={onZero} shouwDay={true} ></TimerDom> 
                        </div>
                      }
                      {
                        curChooise === 0 ? <div className={styles.button0} >まだ開始していません</div> : curChooise === 1 ? <div className={styles.button} onClick={() => {
                          if(account){
                            history.push('/toClaim')

                          }else{
                            history.push('/toConnect')

                          }
                          setNftInfo(item)
                        }}>申し込み中</div> : <div className={styles.button0} >終了しました</div>
                      }


                    </span>
                    }
                  </div>
                
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
