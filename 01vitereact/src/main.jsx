import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
    return(
        <div>
            <h1>Custom App!</h1>
        </div>
    )
}

//ye object hai toh niche render mein bas naam dena hai object ka(wrong syntax)
// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click me to visit Google'
// };

const AnotherElement = (
    <a href = 'https://google.com' target = '_blank'>Visit Google</a>
)

const ReactElement = React.createElement(
    'a',
    {href : 'https://google.com', target : '_blank'},
    'click me to visit google'
    //jitne bhi variables hote hai wo saare iske baad as it is aa jate hai
)

createRoot(document.getElementById('root')).
render(
    ReactElement
    // AnotherElement 

)
 