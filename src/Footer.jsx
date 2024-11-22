import "./Footer.css";
const Footer = () => 
{
    const Links =[
        {
            linktext: "About Us",

        },
        {
            linktext: "App",

        },
        {
            linktext: "Bhagavad Gita AI",

        },
        {
            linktext: "Acknowledgement",

        },
        {
            linktext: "Privacy",

        },
        {
            linktext: "Terms",

        },
        {
            linktext: "Blog",

        },
        {
            linktext: "Donate",

        },
        {
            linktext: "API",

        },
        {
            linktext: "Contact US",

        },
    ]
    return(
        <div>
            <div>
            <footer className="footer1">
                <div className="Outer">
                    <div className="row">
                        <div className="column">
                        {Links.map((item) => (
                            <div className="list-unstyled mb-0" >
                            <div>
                            <a href="#!" className="text-body">{item.linktext}</a>
                            </div>
                            </div>
                             ))}
                        </div>
                    </div>
                </div> 
                    <div>
                        <hr></hr>
                    </div>
                        <center>
                        <div className="" >
                            © 2020 Copyright: <a className="text-body" href="">Ved Vyas Foundation.All rights reserved</a>
                         </div>
                         </center>
            </footer>
            </div>
           
        </div>
    )

}
export default Footer;