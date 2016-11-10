import React from 'react'
import ReactDom from 'react-dom'
import BoxSizing from '../lib/'
import singletonDom from 'singleton-dom'

const Sample = ({type}) => {
  return (
    <BoxSizing type={type}>
      <div style={{width: "50%", border: "5px solid #E18728",             textAlign: "center"}}>
        Parent div with 50% width.
          <div style={{
            width: "90%",
            textAlign: "center",
            padding: "20%",
            border: "4px solid black",
            margin: "0.5em auto"
          }}>
            Child div with 90% width, 4px black border, and 20% padding
          </div>
      </div>
    </BoxSizing>
  )
}

const RadioSelect = ({type, value, onChange}) => (
  <label style={{padding: "0.2em", fontWeight: "bold"}}>
    <input
      type="radio"
      value={value}
      checked={type === value}
      onChange={onChange}/>
    {value}
  </label>
)

const Radio = (props) => {
  return (
    <div>
      <span>{"<BoxSizing type="}</span>
      <RadioSelect value={"border-box"} {...props} />
      <RadioSelect value={"content-box"} {...props} />
      <span>{"/>"}</span>
    </div>
  )
}

class Demo extends React.Component{
  constructor(){
    super()
    this.state = {
      type: "border-box"
    }
  }
  render(){
    const { type } = this.state
    return <div>
      <h1>react-box-sizing</h1>
      <h3>box-sizing value</h3>
      <Radio type={type} onChange={ (e) => {
        this.setState({ type: e.target.value })
      }} />
      <h3>Result</h3>
      <Sample type={type} />
    </div>
  }
}

ReactDom.render(<Demo />, singletonDom('example') )