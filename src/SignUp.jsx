import GoogleIcon from './assets/google.png'

const SignUp = ({type, placeholder,setSignUp})  => {
  return (
    <div>
      <header>
      <h1 style={{textAlign:"center"}}>Valpre Sora Springs</h1>
    </header>
       <div id="container">
        <h1>Hello New Comer</h1>
        <p>We want you ! Please enter your details.</p>
    <div className="data">
            <h3>Email</h3>
      <input type={type}   placeholder={placeholder}  className="input" required/>
                  <h3>Password</h3>
      <input type="password" className="input"  placeholder=" Enter Password" required/>
          </div>
          <br />
        
         
          <br />
          <div className="sign-in-btns">
              <button type="submit" className="signin"> Sign Up</button>
              <button className="google">
                <img src={GoogleIcon } className="googleicon" />
                Sign Up with Google</button>
          </div>
<p>
  Already have an account?
  <a href="#" onClick={(e)=>{ e.preventDefault( ); setSignUp(false)}}>
    Sign In
  </a>
</p>

    </div>
    </div>
  )
}

export default SignUp
