// import React from 'react'
// import "./demo.css"

// export const MyComponent = () => {

//         //hooks
//         const [MyName, setMyName] = React.useState('John Doe')
//         return (
//             // html
//             <div>
//                 <h2 className="title">{ MyName }</h2>
//                 <input
//                     value={MyName}
//                     onChange={(e) => setMyName(e.target.value)}
//                 />
//             </div>
//         )
// }




import React from 'react'
import "./demo.css"

export const MyComponent = () => {

        //hooks
        const [username, setUsername] = React.useState("")
        const [list, setList] = React.useState([])
        // onLoad 
        React.useEffect(() => {
            // setTimeout(() => {
            //     setUsername("john")
            // }, 1500)
            fetch('http://neteasecloudmusicapi.zhaoboy.com/toplist/detail')
            .then(data => data.json())
            .then(data => {
                console.log(data)
                setList(data.list)
            })
        }, [])
        return (
            <div>
                <h4>{username}</h4>
                <input 
                    value={username} 
                    onChange={e => setUsername(e.target.value)}
                />
                <ul>
                {
                    list.map(item => <li>{item.description}</li>)
                }
                </ul>
                
            </div>
        )
}

