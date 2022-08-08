import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postNewPoke } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import './Create.css';

export default function Create() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allTypes = useSelector((state) => state.types);
    const [errors, setErrors] = useState({});

    const [ input, setInput ] = useState({
        name: "",
        life: 50,
        attack: 50,
        defense: 50,
        speed: 50,
        height: 50,
        weight: 50,
        types: [],
        image: ""
    });

    function validation(input) {
        let errors = {};
        if(!input.name || typeof input.name !== "string") {   
            errors.name = "How should we call this Pokemon?";
        } else if (!input.types) {
            errors.types = "Select from 1 to 3 types";
        } else if (!input.image || typeof input.image !== "string" ) {
            errors.image = "Invisibility power! Please insert a valid url image";
        }
        return errors;
    }

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(validation({
            ...input,
            [e.target.name] : e.target.value
        }))
        // console.log(input)
    }

    function handleSelect(e){
        setInput({
            ...input,
            types: [...input.types, e.target.value]
        })
    }

    function handleSubmit(e){
        console.log(input);
        if(!input.name){
            e.preventDefault();
            return alert("Can't create a Pokemon without a name")
        } else if (!input.types.length) {
            e.preventDefault();
            return alert("Please select at least one pokemon type")
        } else if (!input.image) {
            e.preventDefault();
            return alert("Please send a valid url image")
        }
        dispatch(postNewPoke(input))
        alert("Pokemon created succesfully!!")
        setInput({
            name: "",
            life: 50,
            attack: 50,
            defense: 50,
            speed: 50,
            height: 50,
            weight: 50,
            types: [],
            image: ""
        })
        navigate('/home')
    }

    let handleDelete  = (type) => {
        setInput({
            ...input,
            types: input.types.filter( pt => pt !== type)
        })
    }
    
    return (
        <div className='divForm'>
            <Link className="title" to="/home">
                <button className="volver">Home</button>
            </Link>
            
            <div className='title-submit'>
                <h2 className='createTitle'>Pokemon Creation:</h2>
                <button id='submit' className='titleCreate' type='submit' onClick={(e) => handleSubmit(e)}>Ready!</button>
            </div>
                
            <form className='form' onSubmit={(e) => handleSubmit(e)}>
                    
                <div className='leftCreate'>
                    <div className='range'>
                        <label className='textCreate'>Life:</label>
                        <input type="range" min="0" max="100" id='1' value={parseInt(input.life)} name="life" onChange={(e) => handleChange(e)} />
                        <h5 className='textCreate'>{input.life}</h5>
                        {
                            errors.name && (
                                <span className='errors'>{errors.life}</span>
                            )
                        }
                    </div>
                    <br />
                    <div className='range'>
                        <label className='textCreate'>Attack:</label>
                        <input type="range" min="0" max="100" id='2' value={parseInt(input.attack)} name="attack" onChange={(e) => handleChange(e)} />
                        <h5 className='textCreate'>{input.attack}</h5>
                        {
                            errors.name && (
                                <span className='errors'>{errors.attack}</span>
                            )
                        }
                    </div>
                    <br />
                    <div className='range'>
                        <label className='textCreate'>Defense:</label>
                        <input type="range" min="0" max="100" id='3' value={parseInt(input.defense)} name="defense" onChange={(e) => handleChange(e)} />
                        <h5 className='textCreate'>{input.defense}</h5>
                        {
                            errors.name && (
                                <span className='errors'>{errors.defense}</span>
                            )
                        }
                    </div>
                </div>

                <div className='center'>
                    <div className='range'>
                        <label className='textCreate'>Speed:</label>
                        <input type="range" min="0" max="100" id='4' value={parseInt(input.speed)} name="speed" onChange={(e) => handleChange(e)} />
                        <h5 className='textCreate'>{input.speed}</h5>
                        {
                            errors.name && (
                                <span className='errors'>{errors.speed}</span>
                            )
                        }
                    </div>
                    <br />
                    <div className='range'>
                        <label className='textCreate'>Height:</label>
                        <input type="range" min="0" max="100" id='5' value={parseInt(input.height)} name="height" onChange={(e) => handleChange(e)} />
                        <h5 className='textCreate'>{input.height}</h5>
                        {
                            errors.name && (
                                <span className='errors'>{errors.height}</span>
                            )
                        }
                    </div>
                    <br />
                    <div className='range'>
                        <label className='textCreate'>Weight:</label>
                        <input type="range" min="0" max="100" id='6' value={parseInt(input.weight)} name="weight" onChange={(e) => handleChange(e)} />
                        <h5 className='textCreate'>{input.weight}</h5>
                        {
                            errors.name && (
                                <span className='errors'>{errors.weight}</span>
                            )
                        }
                    </div>
                </div>

                <div className='rightCreate'>
                    <div>
                        <label className='textCreate'>Name:</label>
                        <input type="text" id='7' value={input.name} name="name" placeholder='PokeName' onChange={(e) => handleChange(e)} />
                        {
                        errors.name && (
                            <p className='errors'>{errors.name}</p>
                        )
                    }
                    </div>
                    <div>
                        <label className='textCreate'>Select Types:</label>
                        <select id='8' onChange={(e) => handleSelect(e)}>
                            <option value="" hidden name="types">Select Types:</option>
                            {
                                allTypes?.map(pt => {
                                    return ( <option value={pt.name} key={pt.id}>{pt.name}</option> )
                                })
                            }
                        </select>
                        <ul>
                            <li>
                                {
                                    input.types.map( pt =>
                                        <div>
                                            <h5 className='textCreate'>
                                                { allTypes?.find( p => p.name === pt)?.name }
                                                <button className='deleteType' onClick={() => handleDelete(pt)}>X</button>
                                            </h5>
                                        </div>
                                    )
                                }
                            </li>
                        </ul>
                        {
                            errors.types && (
                                <span className='errors'>{errors.types}</span>
                                )
                        }
                    </div>
                    <div>
                        <label className='textCreate'>Image:</label>
                        <input type="url" id='9' value={input.image} name="image" placeholder='Image Url...' onChange={(e) => handleChange(e)} />
                        {
                            errors.img && (
                                <span className='errors'>{errors.image}</span>
                            )
                        }
                    </div>
                </div>
            </form>
        </div>
    )
}