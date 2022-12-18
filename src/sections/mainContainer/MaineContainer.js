import './style.css'

function MainContainer({ children }) {
    return (
        <section className='mainSection'>
            {children}
        </section>
    )
}

export default MainContainer