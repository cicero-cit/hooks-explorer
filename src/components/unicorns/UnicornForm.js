import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getAllUnicorn, postUnicorn, putUnicorn } from './../ActionsUnicorn';

function UnicornForm() {
    const unicorn = useSelector(state => state.ReducerUnicorn.item);
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [colour, setColour] = useState('');

    useEffect(() => {
        if (unicorn._id) {
            setName(unicorn.name);
            setAge(unicorn.age);
            setColour(unicorn.colour);
        }
    }, [unicorn]);

    async function handlePostUnicorn(unicorn) {
        dispatch(await postUnicorn(unicorn));
        dispatch(getAllUnicorn());
    }

    async function handlePutUnicorn(id, unicorn){
      dispatch(await putUnicorn(id, unicorn));
      dispatch(getAllUnicorn());
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const newUnicorn = { name, age, colour };

        if (unicorn._id) {
            await handlePutUnicorn(unicorn._id, newUnicorn);
        } else {
            await handlePostUnicorn(newUnicorn);
        }

        resetFields();
    }

    const resetFields = () => {
        setName('');
        setAge('');
        setColour('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <label htmlFor="name">Name</label>
                <input
                    name="name"
                    id="name"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>

            <div className="input-block">
                <label htmlFor="age">Age</label>
                <input
                    name="age"
                    id="age"
                    type="number"
                    required
                    value={age}
                    onChange={e => setAge(e.target.value)}
                />
            </div>

            <div className="input-block">
                <label htmlFor="colour">Colour</label>
                <input
                    name="colour"
                    id="colour"
                    required
                    value={colour}
                    onChange={e => setColour(e.target.value)}
                />
            </div>

            <button type="submit">Save</button>
        </form>
    );
}

export default UnicornForm;
