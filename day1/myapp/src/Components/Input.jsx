import React, {useState} from 'react';
export default function Input() {

    const [text, setText] = useState('')

    function handleChange(event) {
        setText(event.target.value)
    }

    return (
        <div style={{textAlign:'center'}}>
            <input value={text}
                onChange={handleChange}
            />
            <button>Add</button>
            <p>{text}</p>
        </div>
    )
}