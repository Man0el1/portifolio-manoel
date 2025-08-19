import React from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";

import './MainHeader.css'

export default function MainHeader({ handleBackButton, pageName }) {

  return(
    <div className="main-div-header">
      <h1 className="page-title">{pageName}</h1>
      <button title='back-button' className='back-button' onClick={() => handleBackButton()}><IoMdArrowRoundBack className='arrow'/></button>
    </div>
  )
}
