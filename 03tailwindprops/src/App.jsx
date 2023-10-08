import Card from './components/Card'

export default function App() {
  return (
    <>
    <h1 className="text-3xl bg-green-400 rounded-xl p-4 font-bold underline mb-4">
      Hello world!
    </h1>
    <Card username='wasiq' btnText='click me!'/>
    <Card username='nadeem' btnText='visit me!' />
    <Card username='ali' />

    </>
    
  )
}