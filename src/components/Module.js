
export default function Module(props) {
    console.log(props)
    return (
        <section>
            <div><span className="module--location">{props.item.location}</span> <a href="">View on Google Maps</a></div>
            <h2>{props.item.title}</h2>
            <p>{props.item.startDate} - {props.item.endDate}</p>
            <p>{props.item.description}</p>
        </section>
    )
}

