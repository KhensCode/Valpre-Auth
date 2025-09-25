import GoogleIcon from './assets/google.png'

const SignIn = ({type, placeholder,setSignUp}) => {
  return (
   <>

     <header>
    
      <h1 style={{textAlign:"center"}}>Valpre Sora Springs</h1>
    </header>
    <body className='body1'>
           <div id="container">
        <h1>Welcome Back!</h1>
        <p>We missed you! Please enter your details.</p>
         <div className="data">
            <h3>Email</h3>
      <input type={type}   placeholder={placeholder}  className="input" required/>
                  <h3>Password</h3>
      <input type="password" className="input"  placeholder=" Enter Password" required/>
          </div>
          <br />
          <div className="options">
            <label htmlFor="
            checkbox">
              <input type="checkbox"   />
              Remember me
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <br />
          <div className="sign-in-btns">
              <button type="submit" className="signin"> Sign in</button>
              <button className="google">
                <img src={GoogleIcon } className="googleicon" />
                Sign in with Google</button>
          </div>

       <p>
  Don’t have an account?{" "}
  <a href="#" onClick={(e)=> {e.preventDefault; setSignUp(true)}}>
    Sign Up
  </a>
</p>

    </div>
    </body>
    
   </>
  )
}

export default SignIn

