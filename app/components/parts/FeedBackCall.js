'use client'
import React, { useState, useEffect, useRef } from 'react'

const FeedBackCall = ({ Display, CloseForm }) => {
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const formRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        CloseForm()
      }
    }

    if (Display) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [Display, CloseForm])

  return (
    <div ref={formRef} className="feedBackContent">
      <div className="feedBackHeader">
        <h2 className="feedBackTitle">Заказать звонок</h2>
        <button className="close" onClick={CloseForm}>
          <svg className="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>
      </div>
      <div className="feedBackBody">
        <div className="feedBackInfo">
          Вы можете заказать обратный звонок. Наши менеджеры будут рады ответить на Ваши вопросы.
        </div>
        <form action="" id="feedBackForm">
          <div className="formGroup">
            <label className="formLabel" htmlFor="feedBackPhone">
              Номер телефона
              <span className="asteriskField">*</span>
            </label>
            <div>
              <input
                type="text"
                className="formInput formControl"
                id="feedBackPhone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="formGroup">
            <label className="formLabel" htmlFor="feedBackName">
              Ваше имя
              <span className="asteriskField">*</span>
            </label>
            <div>
              <input
                type="text"
                className="formInput formControl"
                id="feedBackName"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="formGroup">
            <label className="formLabel" htmlFor="feedBackMessage">
              Сообщение
            </label>
            <div>
              <textarea
                className="formInput formControl"
                id="feedBackMessage"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
          <div className="formGroup">
            <button className="buttonPrimary" type="submit">
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FeedBackCall
