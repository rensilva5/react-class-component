import React, { useState, useEffect }from "react"

//class FunctionalComponent extends Component
export default function
FuntionalComponent({passCount}) {
    const [count,setCount] = useState(passCount)
    const [coffee, setCoffee] = useState([])

    useEffect(() => {
        let url = 'https://api.sampleapis.com/coffee/hot'
        fetch(url)
        .then(res => res.json())
        .then(data => {
            // do something w/ data
            setCoffee(data)
    })
}, [])

    return(
        <>
        <h1>This a functional component {count}</h1>
        <button onClick={() => {
            setCount(count+1)
            }}>add one more</button>
        {/* map through map */}
        {coffee.map(
            coffee =>
            <h1 key={coffee.id}>{coffee.title}</h1>
        )}
        </>
    )
}

// export default function FunctionalComponent({count}) {
//     return (
//         <>
//         OMG this is Funtional Components { count }
//         </>
//     )
// }