import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { emptyShowPokemons, getPokemons, getTypes, postNewPoke } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import pokeLogo from "../../img/pokeLogo.png";
// import WRimg from "../../img/waitingResponse.gif";
import './Create.css';

export default function Create() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allTypes = useSelector((state) => state.types);
    const allPokemons = useSelector((state) => state.initialPokemons)
    const [errors, setErrors] = useState({});
    const [types, setTypes] = useState([]);

    useEffect ( () => {
        dispatch(getTypes())
        dispatch(emptyShowPokemons())
        // dispatch(getPokemons())
    }, [dispatch] )

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

    // console.log(allPokemons)

    function validation(input) {
        let errors = {};
        if(!input.name || typeof input.name !== "string") {   
            errors.name = "How should we call this Pokemon?"; } 
            else if (allPokemons.map(p => p.name).includes(input.name.toLowerCase())) {
                errors.name = "This pokemon name already exists"; } 
        if (!input.types.length) {
            errors.types = "Select from 1 to 3 types"; } 
        if (!input.image || typeof input.image !== "string" ) {
            errors.image = "Please insert a valid url image"; }
        return errors;
    }

    function handleChange(e) {
        e.preventDefault();
        // console.log({[e.target.name] : e.target.value})
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(validation({
            ...input,
            [e.target.name] : e.target.value,
            types: types
        }))
        console.log(errors)
    }

    let handleTypes = (e) => {
        e.preventDefault();
        if (!types.length) {
            setTypes([e.target.value])
            setErrors(validation({...input, types: [e.target.value]}))
        } else if (!types.includes(e.target.value)) {
            if (types.length === 3) {
                types.pop()
                setTypes([...types, e.target.value]) 
                setErrors(validation({...input, types: types}))    
            } 
            setTypes([...types, e.target.value])
            setErrors(validation({...input, types: types}))
            } else if (types.includes(e.target.value)) {
                setTypes(types.filter(t => t !== e.target.value))
                setErrors(validation({...input, types: types}))
            } 
    }
        
    function handleSubmit(e){
        e.preventDefault();
        if(!input.name){
            return alert("Can't create a Pokemon without a name")
        } else if (!types.length) {
            return alert("Please select at least one pokemon type")
        } else if (!input.image || input.image.length > 255) {
            return alert("Please send a valid url image")
        }
        input.types = types;
        dispatch(postNewPoke(input))
        window.setTimeout(alert("Pokemon created successfully!!"), 2000);
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
              

    return (
        <div className='createPage'>
            <div className='title-submit'>
                <Link to="/home">
                    <button className="backToHome">Home</button>
                </Link>
                <div className='pTitle'>
                    <img className='logo' src={pokeLogo} alt="pokeLogo" />
                    <h2 className='createTitle'>Creator</h2>
                </div>
                <button id='submit' className='buttonCreate' type='submit' onClick={(e) => handleSubmit(e)}>Ready!</button>
            </div>
            
                
            <form className='form' onSubmit={(e) => handleSubmit(e)}>
                    
                <div className='leftCreate'>
                    <div>
                        <label className='textCreate'>Name</label> <br />
                        <input type="text" id='7' value={input.name} name="name" placeholder='Enter your pokeName...' onChange={(e) => handleChange(e)} />
                        <div className='errorBox'>
                            {
                                errors.name && (
                                    <p className='errors'>{errors.name}</p>
                                )
                            }
                        </div>
                    </div>

                    <div>
                        <label className='textCreate'>Image</label> <br />
                        <input type="url" id='9' value={input.image} name="image" placeholder='Image URL...' onChange={(e) => handleChange(e)} /> <br />
                        <div className='errorBox'>
                            {
                                errors.image && (
                                    <span className='errors'>{errors.image}</span>
                                )
                            }
                        </div>
                        <br />
                        <div className='divImg'>
                            <img className='imgDemo' src={input.image?input.image:"https://cdn-icons-png.flaticon.com/512/528/528098.png"} alt="PokePic" width="150px" height="150px" />
                        </div>
                    </div>
                </div>

                <div className='center'>
                    <div className='range'>
                        <label className='textCreate'>Life</label>
                        <input className='rangeInput' type="range" min="0" max="100" id='1' value={parseInt(input.life)} name="life" onChange={(e) => handleChange(e)} />
                        <h5 className='textCreate'>{input.life}</h5>
                    </div>
                    <br />
                    <div className='range'>
                        <label className='textCreate'>Attack</label>
                        <input className='rangeInput' type="range" min="0" max="100" id='2' value={parseInt(input.attack)} name="attack" onChange={(e) => handleChange(e)} />
                        <h5 className='textCreate'>{input.attack}</h5>
                    </div>
                    <br />
                    <div className='range'>
                        <label className='textCreate'>Defense</label>
                        <input className='rangeInput' type="range" min="0" max="100" id='3' value={parseInt(input.defense)} name="defense" onChange={(e) => handleChange(e)} />
                        <h5 className='textCreate'>{input.defense}</h5>
                    </div>
                    <br />
                    <div className='range'>
                        <label className='textCreate'>Speed</label>
                        <input className='rangeInput' type="range" min="0" max="100" id='4' value={parseInt(input.speed)} name="speed" onChange={(e) => handleChange(e)} />
                        <h5 className='textCreate'>{input.speed}</h5>
                    </div>
                    <br />
                    <div className='range'>
                        <label className='textCreate'>Height</label>
                        <input className='rangeInput' type="range" min="0" max="100" id='5' value={parseInt(input.height)} name="height" onChange={(e) => handleChange(e)} />
                        <h5 className='textCreate'>{input.height}</h5>
                    </div>
                    <br />
                    <div className='range'>
                        <label className='textCreate'>Weight</label>
                        <input className='rangeInput' type="range" min="0" max="100" id='6' value={parseInt(input.weight)} name="weight" onChange={(e) => handleChange(e)} />
                        <h5 className='textCreate'>{input.weight}</h5>
                    </div>
                </div>

                <div className='rightCreate'>
                    <label className='textCreate'>Select Types</label> <br />
                    <div className='typeBox'>
                        {
                                allTypes.map( type =>
                                        <input
                                            className={ types.includes(type.name)
                                                ? 'inputIn'
                                                : 'inputOut'
                                            }
                                            type="button"
                                            value={type.name}
                                            onClick={(e) => handleTypes(e)}
                                        />
                                )
                        }
                    </div>
                    <div className='errorBox'>
                        {
                            errors.types && (
                                <span className='errors'>{errors.types}</span>
                                )
                        }
                    </div>
                </div>
            </form>
        </div>
    )
}
                                    
