import React, { useState } from 'react';

function UnicornForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [colour, setColour] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        await onSubmit({
            name,
            age,
            colour,
        });

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
