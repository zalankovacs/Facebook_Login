import React from 'react'

const Second = () => {
  return (
    <>
      <form className="custom-form">
        <div className="form-group">
          <input
            type="email"
            id="formBasicEmail"
            className="form-control"
            placeholder="E-mail cim vagy telefonszam"
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            id="formBasicPassword"
            className="form-control"
            placeholder="Jelszo"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Bejelentkezés
        </button>
        <div className='forget'>
          <a href='#'>Elfelejtetted a jelszavadat?</a>
        </div>
        <div className='lofasz'></div>
        <div className='btn-container'>
          <button type="submit" className="btn btn-secondary">
            Bejelentkezés
          </button>
        </div>
      </form>
      <div className='creation'>
        <a href='#'>Oldal létrehozása </a>
        híresség, márka vagy vállalkozás számára.
      </div>
    </>
  )
}

export default Second
