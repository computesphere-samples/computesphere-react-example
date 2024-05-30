import './App.css'
import logo from './assets/logo.svg'

function App() {

  return (
    <>
      <div className="watermark">
        <header className="flex-center">
          <img src={logo} />
          <h2>ComputeSphere</h2>
        </header>
        <div className="container flex-center">
          <p className="logo-text">Welcome to <span className="logo-gradient">ComputeSphere</span></p>
          <p className="content-text">Congratulations!!
            <br />If you are seeing this page then your deployment is successful.
            <br />This is a sample page
            to test your deployments.
          </p>
          <a className="text link" href="https://docs.computesphere.com/">Explore our documentation</a>
          <a className="text link" href="https://support.computesphere.com/">Reach out to support</a>
        </div>
        <footer className="flex-center">
          <p>Copyright &copy; <span id="currentYear"></span> ComputeSphere LLC</p>
          <div className="footer-links">
                <span>All Rights Reserved |</span>
                <a className="text link" href="https://computesphere.com/">Terms & Conditions |</a>
                <a className="text link" href="https://computesphere.com/">Privacy Policy</a>
            </div>
        </footer>
      </div>
    </>
  )
}

export default App
