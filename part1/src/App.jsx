import { useState } from 'react'
import viteLogo from '/vite.svg'



const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}


const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const HandleAnecdote= () => {
    return Math.floor(Math.random()*anecdotes.length)
  }
  const HandleVotes = () => {
    const newVotes = [...votes] 
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  const maxVotes = Math.max(...votes);
  const maxVotesIndex = votes.indexOf(maxVotes);
  
  return (
    <div>
      <Header title="Anecdote of the day" />

      {<p>{anecdotes[selected]}</p>}
      <Button text="Next anecdote" handleClick={() => setSelected(HandleAnecdote)} />
      <Button text="Vote" handleClick={HandleVotes} />
      <Header title="Anecdote with most votes" />
      {maxVotes > 0 && <p>{anecdotes[maxVotesIndex]}</p>}
      
    </div>
  )
}

export default App