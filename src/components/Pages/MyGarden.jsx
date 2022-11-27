import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../global components/Card'

function MyGarden() {
  return (
    <div className='page my_garden'>
        <div className="main-container">
            <Card className={'welcome_message message'}>
                {/* <div > */}
                    Hello _user_, Last irregation: 21/2/2023
                {/* </div> */}
            </Card>
            <div className="grid">
                <Link className='link-reset' to={'/garden'}>
                    <Card>Click me to garden</Card>
                </Link>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    </div>
  )
}

export default MyGarden