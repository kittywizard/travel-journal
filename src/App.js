import Header from './components/Header';
import Module from './components/Module';
import data from './data';

export default function App() {
    
    const cardData = data.map(card => {
        return <Module 
                    key={card.id}
                    item={card}
                />
    });
    return (
        <div className="app">
            <Header />
            <div className="section--entries">
                {cardData}
            </div>
        </div>
    )
}