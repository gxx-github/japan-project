import styles from "./index.less";
import classnames from "classnames";
import { judgeIsMobile } from "@/utils";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";
import { useContext, useEffect, useState, type ChangeEvent } from "react";
import { fetchToClaim, fetchUserClaimInfo } from "@/api/home";
import { InfoContext } from "@/components/InfoProvider";
import { history } from "umi";
import { message } from "antd";
import { formatEllipsis } from "@/utils/number";



const Claim = () => {
    const { address: account } = useAccount();
    const [claimAmount, setclaimAmount] = useState(0)
    const { NftInfo }: any = useContext(InfoContext);
    const [inputValue, setinputValue] = useState('')
    const ethereumAddressRegex = /^0x[a-fA-F0-9]{40}$/;
    const { setcurChooise }: any = useContext(InfoContext);
    const [messageApi, contextHolder] = message.useMessage();
    const [isClaimed, setisClaimed] = useState(false)
    const { disconnect } = useDisconnect();


    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setinputValue(inputValue)

        // // 验证输入的钱包地址
        // if (inputValue === '' || ethereumAddressRegex.test(inputValue)) {
        //     setinputValue(inputValue)
        // } else {

        // }
    };
    const quertUserNftInfo = () => {
        const Params = {
            nft_id: NftInfo.id,
            address: account
        }
        fetchUserClaimInfo(Params)
            .then((res) => {
                const data = res.data;
                const { total, amount } = data;
                if (total) {
                    setclaimAmount(total)

                } else {
                    setclaimAmount(0)
                }
                if (total === amount) {
                    setisClaimed(true)
                } else {
                    setisClaimed(false)
                }

            })
            .catch((err) => {
                setclaimAmount(0)
                messageApi.open({
                    type: 'error',
                    content: err.message,
                });
            });
    }
    const handleClaim = () => {
        setcurChooise(1)
        if (!inputValue) {
            messageApi.open({
                type: 'error',
                content: 'エアドロップを受け取るウォレットアドレスを入力してください。',
            });

            return;
        }
        const Params = {
            "nft_id": NftInfo.id, // nft id
            "address": account, // 连接地址，默认
            "new_addr": inputValue, // 新接收地址
            "amount": claimAmount,
            "chain": "polygon",
        }
        fetchToClaim(Params)
            .then((res) => {
                messageApi.open({
                    type: 'success',
                    content: '申請成功',
                });
                const data = res.data;
                setcurChooise(1)
                quertUserNftInfo()

            })
            .catch((err) => {
                // setclaimAmount(0)
                messageApi.open({
                    type: 'error',
                    content: err.message,
                });

            });
    }
    const handleDis = () => {
        disconnect()
        // history.push('/list')
    }
    useEffect(() => {
        quertUserNftInfo()
        if (!account) {
            history.push('/list')
        }
        if (!NftInfo || Object.keys(NftInfo).length === 0 && !account && !window.ethereum) {
            history.push('/toShow')
        }



        return () => {

        }
    }, [account])



    return (
        <section
            className={classnames(
                !judgeIsMobile() ? styles.mainContent : styles.mobile
            )}
        >
            {
                !judgeIsMobile() && account && <div className={styles.walletDom} >
                    <div className={styles.text}>{formatEllipsis(account)}</div>
                    <div className={styles.close}></div>
                    <div className={styles.dis} onClick={() => {
                        handleDis()
                    }} >
                        <span>ウォレット接続を解除する</span>
                    </div>

                </div>
            }
            {contextHolder}
            <div className={styles.commonSection}>
                <div className={styles.innerTop}>
                    <img src={NftInfo.spend} alt="" />
                </div>
                <div className={styles.content}>
                    <div className={styles.showText}>{NftInfo.nft_name}</div>
                    <div className={claimAmount ? styles.showText1 : styles.showText0}><span>保有NFT数</span><br />
                        {claimAmount}個
                    </div>
                    <div className={styles.showItem}>
                        <div className={styles.label}>エアドロップ
                            受け取りアドレス</div>
                        <input className={styles.inner} value={inputValue} onChange={handleInputChange} />

                    </div>
                    <div className={styles.showItem}>
                        <div className={styles.label}>チェーン</div>
                        <div className={styles.inner1}>{NftInfo.chain || ''}</div>
                    </div>
                    <div className={styles.buttons}>
                        {
                            !judgeIsMobile() && <div className={styles.back} onClick={() => {
                                history.push('/list')
                            }}>
                                戻る
                            </div>
                        }

                        {
                            claimAmount !== 0 ? <>
                                {
                                    !isClaimed ? <div className={styles.claimButton} onClick={() => handleClaim()}>申し込み</div> : <div className={styles.claimButtonDis}  >受け取り済み</div>
                                }

                            </> : <div className={styles.claimButtonDis} >申し込み資格がありません</div>
                        }
                    </div>


                </div>
            </div>
        </section>
    );
};
export default Claim;
