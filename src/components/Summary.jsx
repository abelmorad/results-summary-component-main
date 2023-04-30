import Data from '../assets/data.json'
import ContinueBtn from './ContinueButton'
// import reaction from '../images/icon-reaction.svg'

function Skill() {
    return (
        <div>
            {
                Data && Data.map( result => {
                    return (
                        <div 
                        className='ability-container'
                        style={{backgroundColor: `${result.bgcolor}`}}>
                            <div className='ability'>
                                <img src={result.icon}/>
                                <p style={{color: `${result.color}`}}>{result.category}</p>
                            </div>
                            <p>
                                <span style={{fontWeight: 600}}>
                                    {result.score}
                                </span> / 100
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default function Summary() {
    return(
        <section className="summary-container">
            <h3 style={{
                marginBottom: '1rem', 
                textAlign: 'start'
            }}>
                Summary
            </h3>
            <Skill/>
            <ContinueBtn/>
        </section>
    )
}