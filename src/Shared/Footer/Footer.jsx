import logo from '../../assets/img/logo0.jpeg'
const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
  <img src={logo} alt=""  />
  <a className="link link-hover font-bold">Wonder Cars</a> 
  <span className="footer-title">Copyright- <br /> <span>Tiyasa Tagore</span></span>
  
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact: <br /> toyt@toymail </a> 
    <a className="link link-hover">Address: Banani, Dhaka, Bangladesh</a> 
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
    );
};

export default Footer;