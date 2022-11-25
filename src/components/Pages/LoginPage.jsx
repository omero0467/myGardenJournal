import React from 'react'
import Card from '../../global components/Card'

function LoginPage() {
  return (
    <div className='login page flex-center'>
         <Card className='user_login'>
             {/* <div className='user_login'> */}
                <div className='user_image'>some img</div>
                <input type="text" />
                <br />
                <input type="text" />
             {/* </div> */}
         </Card>
    </div>
  )
}

export default LoginPage