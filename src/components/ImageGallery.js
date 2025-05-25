import React, { useState } from "react";

const ImageGallery = () => {
    const numberOfImages = 35; 
    const imageNames = Array.from({ length: numberOfImages }, (_, index) => `kitty${index + 1}.png`);
    const [isBlurred, setIsBlurred] = useState(false);

    const toggleBlur = () => {
        setIsBlurred(prevState => !prevState);
    };

    return (
        <div class="container">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <h1>KITTY NFT GALLERY</h1>
                </div>
                <div className="col-lg-2 mx-auto">
                    <button
                        className="btn btn-primary"
                        onClick={toggleBlur}>
                        {isBlurred ? "Show Images" : "Find out More!"}
                    </button>
                </div>
            </div>

            <div class = "container">
            <div className="row">
                {imageNames.map((imageName, index) => (
                    <div
                        key={index}
                        className="col-sm-5 col-md-3 col-lg-2"
                        style={{ margin: "10px", position: "relative" }} 
                    >
                        <img 
                            src={require(`../Assets/${imageName}`)} 
                            alt={`Kitty${index + 1}`} 
                            className="img-fluid rounded" 
                            style={{ 
                                filter: isBlurred ? "blur(5px)" : "none",
                                height: "12rem",
                                width: "12rem",
                                objectFit: "cover" 
                            }}
                        />
                        {isBlurred && (
                            <p 
                                style={{
                                    position: "absolute",
                                    top: "50%", 
                                    left: "50%",
                                    transform: "translateX(-50%)", 
                                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                                    padding: "8px",
                                    borderRadius: "5px"
                                }}
                            >
                            This is Kitty {index + 1} 
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default ImageGallery;
