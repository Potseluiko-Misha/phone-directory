import React from 'react';

const Header = function() {
    const headerStyle = {textAlign: 'center', padding: '20px', background: 'black', color: 'white', textTransform: 'uppercase'}
    return(
        <div style={headerStyle}>
            Phone Directory
        </div>
    )
}


export default Header;