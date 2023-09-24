import React from 'react'
import { useState, useEffect } from 'react'
import { Button } from '@mui/material';

const Input = (props)=> {
    const asaOptions = [
        { id: 1, label: '1'},
        { id: 2, label: '2'},
        { id: 3, label: '3'},
        { id: 4, label: '4'},
        { id: 5, label: '5'},
        { id: 6, label: '6'}
    ]

    const laminecoptions = [
        { id: 0, label: '0'},
        { id: 1, label: '1'},
        { id: 2, label: '2'},
        { id: 3, label: '≥3'}
    ]

    const TLIFoptions = [
        { id: 0, label: '0'},
        { id: 1, label: '1'},
        { id: 2, label: '≥2'}
    ]

    const sacraloptions =[
        { id:'no', label: 'no'},
        { id:'yes', label: 'yes'}
    ]
    const [formValid, setFormValid] = useState(false);
    const [hn, setHN] = useState('')
    const [weight, setWeight] = useState(50)
    const [height, setHeight] = useState(165)
    const [hct, setHct] = useState(30)
    const [asa, setASA] = useState('')
    const [lamineclevel, setLaminecLevel] = useState('')
    const [tlif, setTLIF] = useState('')
    const [sacral, setSacral] = useState('')

    const validateForm = () => {
        if (weight && height && hct && asa && lamineclevel && tlif && sacral){
            setFormValid(true)
        } else {
            setFormValid(false)
        }
    }

    useEffect(() =>{
        validateForm();
    }, [weight, height, hct, asa, lamineclevel, tlif, sacral])

    const inputHN = (event)=>{
        setHN(event.target.value)
    }
    const inputWeight = (event) =>{
        setWeight(event.target.value)
    }
    const inputHeight = (event) =>{
        setHeight(event.target.value)
    }
    const inputHct = (event) =>{
        setHct(event.target.value)
    }
    const inputASA = (event)=>{
        setASA(event.target.value)
    }
    const inputLaminecLevel = (event) =>{
        setLaminecLevel(event.target.value)
    }
    const inputTLIF = (event) =>{
        setTLIF(event.target.value)
    }
    const inputSacral = (event) =>{
        setSacral(event.target.value)
    }
    const calBlood = (event)=>{
        event.preventDefault()
        const dataCal = {
            hn : hn,
            weight : Number(weight),
            height : Number(height),
            hct : Number(hct),
            asa : Number(asa),
            lamineclevel : Number(lamineclevel),
            tlif : Number(tlif),
            sacral : sacral
        }
        props.onCalData(dataCal)
    }
  return (
    <div className='container-fluid'>
        <div className='row text-center'>
            <div className='col'></div>
            <div className='col-auto'>
                <hr />
                <p className='fs-5 fw-bold'>Patient's Details</p>
            </div>
            <div className='col'></div>
        </div>
        <form onSubmit={calBlood}>
        <div className='row mt-1'>
            <div className='col-6'>
                <p className='text-center text-md-end'>HN </p>
            </div>
            <div className='col-6 col-md-auto'>
                <input type='text' id='hn' placeholder='ระบุ HN' className='form-control' onChange={inputHN}/>
            </div>
        </div>
        <div className='row'>
            <div className='col-6'>
                <p className='text-center text-md-end'>Weight </p>
            </div>
            <div className='col-6 col-md-auto'>
                <input type='number' id='weight' placeholder='ระบุน้ำหนัก (kg.)' className='form-control' onChange={inputWeight}/>
            </div>
        </div>
        <div className='row'>
            <div className='col-6'>
                <p className='text-center text-md-end'>Height </p>
            </div>
            <div className='col-6 col-md-auto'>
                <input type='number' id='height' placeholder='ระบุส่วนสูง (cm.)' className='form-control' onChange={inputHeight}/>
            </div>
        </div>
        <div className='row'>
            <div className='col-6'>
                <p className='text-center text-md-end'>Pre-op Hct(%)</p>
            </div>
            <div className='col-6 col-md-auto'>
                <input type='number' id='hct' placeholder='ระบุ hct (%)' className='form-control' onChange={inputHct}/>
            </div>
        </div>
        <div className='row mt-2 justify-content-center'>
            <div className='col-sm-4 col-md-auto'>
            <div className='row'>
                    <p className='text-center fw-bold'>ASA Classification</p>
                </div>
                <div className='row px-5'>
                    <div className="col-6">
                        {asaOptions.slice(0, 3).map((option) => (
                        <div key={option.id} className="form-check">
                            <input
                            type="radio"
                            id={option.id}
                            name="asa"
                            value={option.id}
                            className="form-check-input"
                            onChange={inputASA}
                            />
                            <label className="form-check-label" htmlFor={option.id}>
                            {option.label}
                            </label>
                        </div>
                        ))}
                    </div>
                    <div className="col-6">
                        {asaOptions.slice(3).map((option) => (
                        <div key={option.id} className="form-check">
                            <input
                            type="radio"
                            id={option.id}
                            name="asa"
                            value={option.id}
                            className="form-check-input"
                            onChange={inputASA}
                            />
                            <label className="form-check-label" htmlFor={option.id}>
                            {option.label}
                            </label>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='col-sm-4 col-md-auto'>
                <div className='row'>
                    <p className='text-center fw-bold'>Laminectomy(Level)</p>
                </div>
                <div className='row px-5'>
                    <div className="col-6">
                        {laminecoptions.slice(0, 2).map((option) => (
                        <div key={option.id} className="form-check">
                            <input
                            type="radio"
                            id={option.id}
                            name="laminec"
                            value={option.id}
                            className="form-check-input"
                            onChange={inputLaminecLevel}
                            />
                            <label className="form-check-label" htmlFor={option.id}>
                            {option.label}
                            </label>
                        </div>
                        ))}
                    </div>
                    <div className="col-6">
                        {laminecoptions.slice(2).map((option) => (
                        <div key={option.id} className="form-check">
                            <input
                            type="radio"
                            id={option.id}
                            name="laminec"
                            value={option.id}
                            className="form-check-input"
                            onChange={inputLaminecLevel}
                            />
                            <label className="form-check-label" htmlFor={option.id}>
                            {option.label}
                            </label>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='col-sm-4 col-md-auto'>
                <div className='row'>
                    <p className='text-center fw-bold'>TLIF (Level)</p>
                </div>
                <div className='row px-5'>
                    <div className="col-6">
                        {TLIFoptions.slice(0, 2).map((option) => (
                        <div key={option.id} className="form-check">
                            <input
                            type="radio"
                            id={option.id}
                            name="tlif"
                            value={option.id}
                            className="form-check-input"
                            onChange={inputTLIF}
                            />
                            <label className="form-check-label" htmlFor={option.id}>
                            {option.label}
                            </label>
                        </div>
                        ))}
                    </div>
                    <div className="col-6">
                        {TLIFoptions.slice(2).map((option) => (
                        <div key={option.id} className="form-check">
                            <input
                            type="radio"
                            id={option.id}
                            name="tlif"
                            value={option.id}
                            className="form-check-input"
                            onChange={inputTLIF}
                            />
                            <label className="form-check-label" htmlFor={option.id}>
                            {option.label}
                            </label>
                        </div>
                        ))}
                    </div>
                </div>
                <div className='row mt-3'>
                    <p className='text-center fw-bold'>ผ่าถึงระดับ Sacral (Sacral inclusion)</p>
                </div>
                <div className='row px-5'>
                    <div className="col-6">
                        {sacraloptions.slice(0, 1).map((option) => (
                        <div key={option.id} className="form-check">
                            <input
                            type="radio"
                            id={option.id}
                            name="sacral"
                            value={option.id}
                            className="form-check-input"
                            onChange={inputSacral}
                            />
                            <label className="form-check-label" htmlFor={option.id}>
                            {option.label}
                            </label>
                        </div>
                        ))}
                    </div>
                    <div className="col-6">
                        {sacraloptions.slice(1).map((option) => (
                        <div key={option.id} className="form-check">
                            <input
                            type="radio"
                            id={option.id}
                            name="sacral"
                            value={option.id}
                            className="form-check-input"
                            onChange={inputSacral}
                            />
                            <label className="form-check-label" htmlFor={option.id}>
                            {option.label}
                            </label>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <div className='row justify-content-center mt-3'>
            <div className='col'></div>
            <div className='col-auto'>
                <Button type="submit" variant="contained" disabled={!formValid}>Calculate PRC</Button>
            </div>
            <div className='col'></div>
        </div>
        </form>
    </div>
  )
}

export default Input