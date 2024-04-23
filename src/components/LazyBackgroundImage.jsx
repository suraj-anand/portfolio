import { useState, useEffect } from 'react';

function LazyBackgroundImage({ imageUrl, children, classes="", styles={}, ...rest }) {
    
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.onload = () => {
            setLoaded(true);
        };
        image.src = imageUrl;
    }, [imageUrl]);

    const backgroundStyle = {
        background: loaded ? `url(${imageUrl})` : 'none',
    };

    return (
        <div className={`main-bg ${classes}`} style={{...backgroundStyle, ...styles}} {...rest}>
            {children}
        </div>
    );
}

export default LazyBackgroundImage;
