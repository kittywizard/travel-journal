
export default function Module(props) {

    console.log(props.item.imageUrl);

    return (
        <section className="section--module">
            <div className="module--flex--img">
                <img src={props.item.imageUrl} className="module--img" alt={props.item.location}></img>
            </div>
            <div className="module--flex">
                <div className="module--location">
                    <span>
                        <i className="fas fa-map-marker-alt map-icon"></i> 
                        <span className="module--location--name">{props.item.location}</span>
                    </span>
                    <a href={props.item.googleMapsUrl} className="module--link" target="_blank" rel="noreferrer">View on Google Maps</a>
                </div>
                <h2 className="module--headline">{props.item.title}</h2>
                <p className="module--date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="module--desc">{props.item.description}</p>
            </div>
        </section>
    )
}

