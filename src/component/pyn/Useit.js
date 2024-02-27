import React from 'react'
import use from '../../data/use.json'
import style from '../../sass/yn/use.module.scss'
import '../../sass/yn/use.scss'
import { useState, useEffect } from 'react';
function Useit() {
    const [tabnm, settabnm] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            settabnm(prevTabnm => (prevTabnm + 1) % use.tab.length);
        }, 3000);
        return () => clearInterval(intervalId);
    })
    return (
        <div className={`${style.useit} container mtb-10`} data-aos="fade-up" data-aos-duration="2000">
            <div className={`${style.dsc} container text-center mb-5`}>
                <p >
                    <h1 className={`${style.wrap} personalColorBold`}>상담부터 계약까지 간편한 이용절차.</h1> <br />
                    
                </p>
            </div>
            <div className={`${style.threeBanner} container px-0`}>
                <div className={`${style.tabhead} w-100 d-flex justify-content-center py-3`}>
                    {
                        use.tab.map((v, i) => {

                            return (
                                <div className={`tabhead d-flex  w-100 justify-content-center py-3`}>
                                    <h4
                                        onClick={() => { settabnm(i) }}
                                        className={tabnm === i ? 'act' : null}
                                    ><a href="#none" className={style.heada}>{v.tabsubject}</a></h4>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='content d-flex flex-row justify-content-center align-items-center py-5 col-lg-12 m-auto'>

                    {
                        use.tab[tabnm] &&
                        <div className={` d-flex flex-column flex-lg-row align-items-center justify-content-center col-lg-8 col-md-10 col-sm-12`}>
                            <img src={use.tab[tabnm].tabact.tabimg} className={style.tab_img} alt="" />
                            <div className={`${style.tab_w} px-5 mx-sm-3`}>
                                <span className={`${style.tab_span} mx-5 py-3 d-inline-block`}><strong>STEP {tabnm + 1}</strong>
                                </span> <br />
                                <span className={style.tab_subspan}>{use.tab[tabnm].tabact.tabtext}</span> <br />
                                <span className={style.tab_subspan}>{use.tab[tabnm].tabact.tabtext2}</span>
                            </div>

                        </div>
                    }

                </div>
            </div>
            <button className={`${style.usebtn} usebtn`}>
                <h3>계약하러 가기 <i class="bi bi-book"></i></h3>
                <p>자세한 내용 과 계약은 상담을 통해 알아보세요.
                    <br></br> 친절한 상담 과 서비스를 약속드립니다.</p>
            </button>
        </div>
        
    )
}

export default Useit
