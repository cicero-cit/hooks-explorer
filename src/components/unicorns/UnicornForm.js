import React, { useState, useEffect } from 'react';

function UnicornForm({ onSubmit, onPut, editingItem }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [colour, setColour] = useState('');

    useEffect(() => {
        if(editingItem._id){
            setName(editingItem.name);
            setAge(editingItem.age);
            setColour(editingItem.colour);
        }
    }, [editingItem])

    async function handleSubmit(e) {
        e.preventDefault();
        const obj = { name, age, colour };

        if(editingItem._id){
            await onPut(obj);
        }else{
            await onSubmit(obj);
        }

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
