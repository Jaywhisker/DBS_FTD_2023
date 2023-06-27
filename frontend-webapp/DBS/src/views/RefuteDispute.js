import React, { useState } from 'react';
import '../components/styles/RefuteDisputeStyles.css'
import { useNavigate } from 'react-router-dom';

const RefuteDispute = () => {
    const navigate = useNavigate();
    const [empty, setIsFormSubmitted] = useState(false);

    const handleSubmit = async(event) => {
        event.preventDefault(); // Prevent form submission
        const reasonInput = event.target.elements.refuteReason;
        const reasonValue = reasonInput.value.trim();
        if (reasonValue === '') {
            setIsFormSubmitted(true);
        } else {
            // Handle form submission
        }
    }

    return (
        <div className='RefuteDisputeMain'>
            <div className='RefuteDisputeHeader'>
                <button onClick={() => navigate('/')} className='transparent'>
                    <img src={require('../../src/components/assets/back.png')} className='back' />
                </button>
                <p className='RefuteDisputeHeaderText'>Refute Dispute</p>
            </div>
            <div className='RefuteDisputeLine'></div>
            <div className='RefuteDisputeBody'>
                <form className='RefuteDisputeForm' onSubmit={handleSubmit}>
                    {empty && (
                    <div className='RefuteDisputeWarning'>
                        <p className='warningtext'>* THIS FIELD CANNOT BE LEFT BLANK</p>
                    </div>
                    )}
                    <input type='text' className='RefuteDisputeReason' name='refuteReason'
                        placeholder='Reason for Refuting Dispute'></input>
                    <p className='note1'>Note: It is an offense under the Penal Code
                        for the recipient to retain or use the funds after being informed that it
                        was sent by mistake. The sender may consider lodging a police report.</p>
                    <p className='note2'>Your reason can be seen by the sender.</p>
                    <button className='SubmitButton'>SUBMIT</button>
                </form>
            </div>
        </div>
    )
};
export default RefuteDispute;