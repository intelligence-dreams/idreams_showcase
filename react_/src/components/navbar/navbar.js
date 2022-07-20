import { useNavigate } from "react-router";

export default function Navbar(){
    const navigate = useNavigate();

    const to_products = ()=>navigate("/products");
    const to_home = ()=>navigate('/');
    const to_CaseStudy = ()=>navigate("/case-study/driver-license-verification")
    const to_maps = ()=>navigate('/maps');
    const to_potholes=()=>navigate("/potholes");

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom border-1 shadow" style={{width:"99vw"}}>
            <div className="collapse navbar-collapse" style={{width:"72vw"}}>
                <button className=" border border-0 bg-white" href="#" onClick={to_home}><img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" className="rounded-circle align-baseline" width={40} height={40} /></button>
                <button className="navbar-brand border border-0 bg-white" href="#" onClick={to_home}><h5 className="font-weight-bold">Potholes</h5></button>
            </div>
            
            <div className="navbar-collapse collapse navbar-right">
                
                <ul className="navbar-nav ml-auto" >
                        <li className="nav-item">
                                <div className="dropdown">
                                    <button type="button" className="nav-link bg-white border border-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><small className="font-weight-bold text-sm">USE CASSES</small></button> 
                                    <div className="dropdown-menu">
                                        <button className="dropdown-item" type="button"  onClick={to_CaseStudy}>Driver License OCR</button>
                                        <button className="dropdown-item" type="button" onClick={to_potholes}>Potholes</button>
                                        <button className="dropdown-item" type="button" onClick={to_products}>Commercial insurance boot</button>
                                    </div>
                                </div>
                        </li>
                        <li className="nav-item">
                        
                            <div className="dropdown">
                                <button type="button" className="nav-link bg-white border border-0  font-weight-bold text-sm " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><small className=" font-weight-bold text-sm display">ABOUT</small></button>
                                <div className="dropdown-menu">
                                        <button className="dropdown-item" type="button">Action</button>
                                        <button className="dropdown-item" type="button">Another action</button>
                                        <button className="dropdown-item" type="button">Something else here</button>
                                </div>
                            </div> 
                        </li>
                        

                        <li className="nav-item"><a href="#" className="nav-link" onClick={to_maps}><small className=" font-weight-bold text-sm">CONTACT US</small></a> </li>
                        {/* <li className="nav-item">
                                <div className="dropdown">
                                    <button className="nav-link bg-white border border-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><small className="font-weight-bold text-sm">RESOURCES</small></button>
                                    <div className="dropdown-menu">
                                        <button className="dropdown-item">Action</button>
                                        <button className="dropdown-item">Another</button>
                                    </div>
                                </div>
                            
                        </li>
                        <li className="nav-item">
                            <div className="dropdown">
                                <button className="nav-link bg-white border border-0" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><small className="font-weight-bold text-sm">PRICINGLOG</small></button>
                                <div className="dropdown-menu">
                                    <button className="dropdown-item">Action</button>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item"><button className="nav-link  border border-1 border-primary border border-1 border-primary bg-white text-primary rounded-lg"><small className="font-weight-bold text-sm">GET STARTED FOR FREE</small></button> </li> */}

                </ul>
            </div>

        </nav>
    );
}