import React from 'react'

const Card = (props) => {
    return (
        <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <h5 style={{ fontWeight: 'bold', marginBottom: '10px' }}>{props.title}</h5>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                {props.subtitille}
            </p>
        </div>
    )
}
export default Card
