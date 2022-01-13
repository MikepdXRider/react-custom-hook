import React from 'react'

export default function Display({content}) {
    return (
        <section>
            <p>{content ? content.toLocaleString('en-US') : 'Pick a date'}</p>
        </section>
    )
}
