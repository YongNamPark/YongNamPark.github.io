import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet';




import use from '../../data/data.json'
import style from '../../sass/yn/branch.module.scss'
import '../../sass/yn/branch.scss'





export const Branch = () =>{
    const { kakao } = window
    const [kakaoinfo, setkakaoinfo] = useState({
        region : 0,
        branch : 0 
    }) ; // 지역번호 /

    const branchregion = useRef(0);  //



    const maponclick = (r, b) => {
        // 지역, 지점모두 클릭
        setkakaoinfo({
            region : r,
            branch : b  
        })
        branchregion.current = r;
    }
    

    useEffect(()=>{ //html에 return 출력이 완료되면 실행
 
        var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        var options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(...use.branch_info[kakaoinfo.branch].branch_pos), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };
        
        var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        console.log(...use.branch_info[kakaoinfo.branch].branch_pos)
        // 127.020346472276,37.5160790812474
        
    
    },[kakaoinfo])

    return (
        <div className="mtb-10" data-aos="fade-up" data-aos-duration="2000">

            <div className='addressMap'>
                <div className={`${style.intro} intro container text-center my-5 `}>
                    <h2>지점 위치 및 소개</h2><br />
                    대한민국 여러 지점에서 스토어관리를 합니다.
                </div>

                <div className="adMap container d-flex justify-content-between flex-column flex-md-row mt-5">
                    <div className="wrapper col-md-6">
                        <div id='map' className='map'>
                          
                        </div>
                    </div>

                    <div className="adMapzone col-md-6 mx-5 ">
                        <h4><strong>논현점</strong></h4>
                        <p>서울특별시 강남구 강남대로132길 29, 금강빌딩 지하 2층</p>
                        <hr />
                        <p>
                            -지하철-<br />
                            <img src="./img/yong/ic_line7.png" alt="" /> 논현역 7번출구 도보 4분거리 <br />
                            <img src="./img/yong/ic_line3.png" alt="" /> 신사역 1번출구 도보 9분거리 <br /><br />
                            -내비게이션- <br />
                            T map &nbsp;  &nbsp; 카카오맵 &nbsp;  &nbsp; 네이버지도 &nbsp;  &nbsp; 구글 맵
                        </p>
                    </div>
                </div>
                <div className="firstad container my-5">
                    <ul className="citynm d-md-flex row justify-content-center align-items-center">
                        {
                            use.region_info.map((v, i) => {
                                return (
                                    <>


                                        <li
                                            onClick={() => { maponclick(i, 0) }}
                                            className={`${kakaoinfo.region === i ? 'on' : null} col-2`}>
                                            {v.region_name}
                                        </li>
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="secondad container my-5">
                    <ul className="subnm d-md-flex row justify-content-center align-items-center">
                        {
                            use.branch_info.map((vv, ii) => {
                                return (
                                    <>
                                        <li
                                            onClick={() => { maponclick(branchregion.current, ii);  }}
                                            className={`${kakaoinfo.branch === ii ? 'on' : null} col-2`}>
                                            {vv.branch_name}
                                        </li>
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}


