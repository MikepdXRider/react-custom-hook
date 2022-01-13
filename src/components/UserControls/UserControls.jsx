import React from 'react'

export default function UserControls({feedback, dateInput, setDateInput, undo, redo }) {
    return (
        <section>
            <div>
                {feedback && <p>{feedback}</p>}
                <button id='undo' name='undo' onClick={() => undo()}>Undo</button>
                <button id='redo' name='redo' onClick={() => redo()} >Redo</button>
            </div>
            <form>
                <label htmlFor="date">Date</label>
                <input type="date" id='date' name='date' value={dateInput} onChange={(e) => setDateInput(e.target.value)} />
            </form>
        </section>
    )
}
