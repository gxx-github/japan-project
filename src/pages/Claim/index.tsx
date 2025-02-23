import styles from "./index.less";
import classnames from "classnames";
import { judgeIsMobile } from "@/utils";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useContext, useEffect, useState, type ChangeEvent } from "react";
import { fetchToClaim, fetchUserClaimInfo } from "@/api/home";
import { InfoContext } from "@/components/InfoProvider";
import { history } from "umi";



const Claim = () => {
    const { address: account } = useAccount();
    const [claimAmount, setclaimAmount] = useState(0)
    const { NftInfo }: any = useContext(InfoContext);
    const [inputValue, setinputValue] = useState('')
    const ethereumAddressRegex = /^0x[a-fA-F0-9]{40}$/;

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        // 验证输入的钱包地址
        if (inputValue === '' || ethereumAddressRegex.test(inputValue)) {
            setinputValue(inputValue)
        } else {

        }
    };
    const quertUserNftInfo = () => {
        const Params = {
            nft_id: NftInfo.id,
            // address: account
            address: '0x8E64c24749B181d1c547586aC7fCDc8e07db27c3'
        }
        fetchUserClaimInfo(Params)
            .then((res) => {
                const data = res.data;
                const { total } = data;
                if (total) {
                    setclaimAmount(total)
                } else {
                    setclaimAmount(0)
                }

            })
            .catch(() => {
                setclaimAmount(0)
            });
    }
    const handleClaim = ()=>{
        const Params = {
            "nft_id":NftInfo.id, // nft id
            // "address":account, // 连接地址，默认
            "address":'0x8E64c24749B181d1c547586aC7fCDc8e07db27c3', // 连接地址，默认
            "new_addr":inputValue, // 新接收地址
            "amount":1,
            "chain":"bsc",
        }
        fetchToClaim(Params)
        .then((res) => {
            const data = res.data;
            setTimeout(() => {
                history.push('/')
            }, 3000);
        })
        .catch(() => {
            setclaimAmount(5)
        });
    }

    useEffect(() => {
        quertUserNftInfo()
        if (account) {
            setinputValue(account)
        }
        if (!NftInfo || Object.keys(NftInfo).length === 0) {
            history.push('/')
        }

        return () => {

        }
    }, [account])



    return (
        <section
            className={classnames(
                styles.mainContent,
                !judgeIsMobile() ? "" : styles.mobile
            )}
        >
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
                        <div className={styles.inner1}>Polygon</div>
                    </div>
                    {
                        claimAmount ? <div className={styles.claimButton} onClick={() =>handleClaim()}>申し込み</div> : <div className={styles.claimButtonDis} >申し込み資格がありません</div>
                    }

                </div>
            </div>
        </section>
    );
};
export default Claim;
