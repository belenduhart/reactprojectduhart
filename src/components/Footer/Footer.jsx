import './Footer.css';

const Footer = () =>{
    return(
        <>
            <section id="footer">
                <div>
                    <p>
                        Las Chuecas Store 2021 ©
                    </p>
                </div>
                <div>
                    <a href="www.facebook.com"><i id="redes" className="fab fa-facebook-f"></i></a>
                    <a href="www.instagram.com"><i id="redes" className="fab fa-instagram"></i></a>
                    <a href="www.whatsapweb.com"> <i id="redes" className="fab fa-whatsapp"></i></a>
                </div>
            </section>
        </>
    )
}

export default Footer;