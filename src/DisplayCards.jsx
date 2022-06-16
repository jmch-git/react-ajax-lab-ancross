
export default function DisplayCards(props) {
    const allVillagers = props.villagers.map((v, i )=> {
        return (
            <li key={`v-${i}`}>
                <img onClick={()=>props.handleClick(v)} src={v.image_uri} alt={v.name["name-Usen"]} />
                <p>{v.name["name-USen"]}</p>
            </li>
        )
    })

    return (
        <ul>{allVillagers}</ul>
    )
}