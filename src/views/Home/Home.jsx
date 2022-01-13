import React, { useState } from 'react'
import Display from '../../components/Display/Display.jsx'
import UserControls from '../../components/UserControls/UserControls.jsx'
import useTimeTravel from '../../hooks/useTimeTravel.js';


export default function Home() {
    const [date, feedback, save, undo, redo] = useTimeTravel();

    return (
        <>
            <UserControls dateInput={date} setDateInput={save} feedback={feedback} undo={undo} redo={redo} />
            <Display content={date}/>
        </>
    )
}

