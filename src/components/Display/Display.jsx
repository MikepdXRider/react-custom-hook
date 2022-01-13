import React from 'react'

export default function Display({content}) {
    return (
        <section>
            <p>{content ? content : 'Pick a date'}</p>
        </section>
    )
}
