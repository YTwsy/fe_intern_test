import './App.css'
import Table from "./Table.jsx";

function App() {
    const source = (() => {
        const shapes = ['Circle', 'Triangle', 'Square']
        const colors = ['White', 'Black', 'Blue', 'Red']
        const source = []
        for (let i = 0; i < 100; i++) {
            const shapeIndex = Math.floor((Math.random() * 100) % shapes.length)
            const colorIndex = Math.floor((Math.random() * 100) % colors.length)
            source.push({
                id: i,
                shape: shapes.at(shapeIndex),
                color: colors.at(colorIndex),
                area: Math.floor(Math.random() * 100),
            })
        }
        return source
    })()

    return (
    <>
      <Table source={source} />;
    </>
  )
}

export default App
