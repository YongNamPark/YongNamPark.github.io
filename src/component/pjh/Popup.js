import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Modal, Button, Form } from 'react-bootstrap';

import Style from "../../sass/jh/Popup.module.scss";
import "../../sass/jh/Popup.scss";

function Popup(props) {
    const [isPop, setPop] = useState(true);
    const [cookies, setCookie] = useCookies(['popupClosed']);
    const [dontShowToday, setDontShowToday] = useState(false);

    useEffect(() => {
        // 쿠키를 기반으로 팝업이 보여질지 결정합니다.
        if (cookies.popupClosed) {
            setPop(false);
        }
    }, [cookies.popupClosed]);

    const showPop = () => setPop(true);

    const hidePop = () => {
        // 팝업이 닫힐 때 쿠키를 설정하여 오늘 하루 동안 팝업을 보이지 않도록 합니다.
        if (dontShowToday) {
            const expiryDate = new Date();
            expiryDate.setHours(23, 59, 59, 999); // 하루의 마지막 시간으로 설정
            setCookie('popupClosed', true, { expires: expiryDate });
        }
        setPop(false);
    };

    const handleCheckboxChange = (event) => {
        setDontShowToday(event.target.checked);
    };

    const handleLabelClick = () => {
        setDontShowToday(!dontShowToday);
    };

    const handleCloseButtonClick = () => {
        hidePop();
    };

    return (
        <>
            {isPop && (
                <div className="modal show popupModal" style={{ display: 'block', position: 'initial' }}>
                    <Modal
                        show={true}
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        className={Style.modal}
                    >
                        <Modal.Body className={Style.modalBody}>
                            <img src="/img/pjh/popup/eventImg_1.png" alt="" style={{ borderRadius: "2%" }} />
                            <div className={Style.modalbutton}>
                                <Form.Check
                                    type="checkbox"
                                    label=""
                                    checked={dontShowToday}
                                    onChange={handleCheckboxChange}
                                />
                                <Form.Check.Label className={`me-auto`} onClick={handleLabelClick}>오늘은 더 이상 보이지 않습니다.</Form.Check.Label>
                                <Button onClick={handleCloseButtonClick}>닫기</Button>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
            )}
        </>
    );
}

export default Popup;