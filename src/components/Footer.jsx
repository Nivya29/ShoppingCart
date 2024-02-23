import './Footer.css'
function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="card">
                    
                    <div className="card-body">
                        
                    <p className="copyright">Copyright&copy;Decor with the Best {new Date().getFullYear()}</p>
                        
                    </div>
                </div>
                
            </div>
        </div>
    );
}
export default Footer