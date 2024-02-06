import React from 'react'
import { Iconsbtn } from './Iconsbtn'

export const Confirmationmodal = ({modalData}) => {
  return (
    <div> 
        <div>
            <p>
            {modalData.text1}
            </p>
            <p>
            {modalData.text2}
            </p>
            <div>
                <Iconsbtn
                    onclick={modalData?.btn1Handler}
                    text={modalData?.btn1Text}
                />
                <button onClick={modalData?.btn2Handler}>
                    {modalData?.btn2Text}
                </button>

            </div>
        </div>
    </div>
  )
}
