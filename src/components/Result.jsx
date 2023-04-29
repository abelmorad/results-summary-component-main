export default function Result() {
    return (
        <section className="result-container">
            <h3 style={{color: 'hsl(241, 100%, 89%)',}}>Your Result</h3>
            <div className="score">
                <p style={{fontSize: '3.5rem', fontWeight: 800}}>78</p>
                <p style={{color: 'hsl(241, 100%, 89%)'}}>of 100</p>
            </div>
            <div className="result">
                <h2>Great</h2>
                <p className="comment">
                    You scored higher than 65% of the people
                    who have taken these tests.
                </p>
            </div>
        </section>
    )
}