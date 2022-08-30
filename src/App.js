import image1 from './dsc2.jpg'
import './App.css';
import React from "react";

function App() {
    return (
        <div className="App">

            <div className="image-header">
                <div className="nav">
                    <div className="left">
                        <a href="">AR SHAKIR</a>
                    </div>
                    <div className="center">
                        <ul>
                            <li>
                                <a href="">Template</a>
                            </li>
                            <li>
                                <a href="">Product</a>
                            </li>
                            <li>
                                <a href="">Pricing</a>
                            </li>
                            <li>
                                <a href="">Pricing</a>
                            </li>
                        </ul>
                    </div>
                    <div className="right">
                        <button className="transparent">Sign-up</button>
                        <button>Start-free</button>
                    </div>


                </div>
                <img src={image1} alt=""/>
            </div>
        </div>
    );
}

export default App;
