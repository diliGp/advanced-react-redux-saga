import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <div className="Logo" data-test="Logo">
            <Link to="/">Galleria</Link>
        </div>
    )
}

export default Logo
