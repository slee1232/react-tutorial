import React from 'react'

const Contact = (props) => { //router automatically adds in props
    //console.log(props);
    // setTimeout(() => {
    //     props.history.push('about')
    // }, 2000); // this is programmatic redirect
    return(
        <div className="container">
            <h4 className="center">Contact</h4> //typing "lorem" creates the sample text
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quos quidem delectus ducimus deserunt laborum accusamus exercitationem architecto quae voluptas blanditiis sunt veritatis, iste sed perferendis quia totam recusandae! Ab.</p>
        </div>
    )
}

export default Contact