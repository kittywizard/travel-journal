
export default function Module(props) {
    console.log(props)
    return (
        <section className="section--module">
            <div>
                <img src={props.item.imageUrl} className="module--img"></img>
            </div>
            <div>
                <span className="module--location">{props.item.location}</span> <a href="#">View on Google Maps</a>
                <h2>{props.item.title}</h2>
                <p className="module--date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="module--desc">{props.item.description}</p>
            </div>
        </section>
    )
}

