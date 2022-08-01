import React from 'react';

const User = (props) => {
    const familiar = props.familiar;
    let greeting ;
    if(familiar){
        greeting = <p>Welcome, my friend.</p>;
    }
    else{
        greeting = <p>Who are you?</p>;
    }

    return (
        <div>
            <div>
                <h2>Greetings</h2>
                {greeting}
            </div>
            <div>
                <h3>Food</h3>
                {
                    familiar ? <p>I'll buy food</p> : <p>Let's eat his his whose whose</p>
                }
                
                
            </div>
            <div>
                <h3>Connection</h3>
                {
                    familiar ? 
                    <p>Let's join my facebook</p> 
                    : <p>I don't need stranger</p>
                }
                
                
            </div>
        </div>
    );
};

export default User;