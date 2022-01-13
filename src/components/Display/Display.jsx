import React from 'react'
import dateFormatter from '../../utils/dateFormatter.js'

export default function Display({content}) {
    return (
        <section>
            <p>{content ? dateFormatter(content) : 'Pick a date'}</p>
        </section>
    )
}
