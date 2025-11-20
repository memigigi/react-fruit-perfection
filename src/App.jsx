import './App.css'

function App() {
    return (<>
            <header>
            <h1>Fruit perfection</h1>
            <button>Shop nu</button>
            </header>

            <main>
                <article className="product">
                    <img
                        src="https://willemsvershal.nl/wp-content/uploads/2020/05/citroenen-80.jpg"
                        alt="Citroen"
                    />
                    <h2 className="product-name">Citroen</h2>
                    <p className="product-description">
                        "Een citroen is voor de meeste mensen te zuur om zo uit de hand te eten. Van citroen kun je het vruchtvlees, het sap en de schil gebruiken. Het sappige, lichtgele zure vruchtvlees versterkt de smaak van ander voedsel."
                    </p>
                </article>
        </main>
  </>
    )
}

export default App
