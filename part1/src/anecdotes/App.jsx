import { useState } from 'react'
import viteLogo from '/vite.svg'



const Statistics = (props) => {
  if (props.total!=0) {
  return (
    <div>
      <p>Good : {props.good}</p>
      <p>Neutral : {props.neutral}</p>
      <p>Bad : {props.bad}</p>
      <p>Total : {props.total}</p>
      <p>Average : {(props.variable/props.total).toFixed( 2 )}</p>
      <p>Positive: {((props.good)/(props.good+props.neutral+props.bad)*100).toFixed( 2 ) + "%"}</p>
 
    </div>
  )
  }
  else {
    return (
      <div>
        <p>No feedback is given</p>
      </div>
    )
  }
}



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

 // save clicks of each button to its own state
 const [comments, setComments] = useState({good: 1, neutral: 0, bad: -1})
 const [total, setTotal] = useState({good: 0, neutral: 0, bad: 0})

 const title = 'Give  Feedback'
 const statistics= 'Statistics'

 const Neutral = () => {
 const changed_neutral = {...comments, neutral:comments.neutral+0}
 const changed_total = {...total, neutral:total.neutral+1}
 setTotal(changed_total)
 setComments(changed_neutral)
 }

 const Good = () => {
 const changed_good = {...comments, good:comments.good+1}
 const changed_total = {...total, good:total.good+1}
 setTotal(changed_total)
 setComments(changed_good)
 }

 const Bad = () => {
 const changed_bad = {...comments, bad:comments.bad-1} 
 const changed_total = {...total, bad:total.bad+1}
 setTotal(changed_total)
 setComments(changed_bad)
 }

  return (
    <div>
      <Header title={title} /> 
      <Button handleClick={Neutral} text="Neutral" />
      <Button handleClick={Good} text="Good" />
      <Button handleClick={Bad} text="Bad" />
      
      <Header title={statistics} />
      <Statistics good={total.good} bad = {total.bad} neutral={total.neutral} variable={(comments.good+comments.neutral+comments.bad)} total ={(total.good+total.neutral+total.bad)} />
      
        
        
      
           
    </div>
  )
}

export default App