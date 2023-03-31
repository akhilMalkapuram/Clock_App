import Clock from "./Components/Clock"
import { Component } from "react"
import "./App.css"

class App extends Component{
    state={
        showClock:false
    }
    onToggleClock=()=>{
        this.setState(prevState=>{
            const {showClock}=prevState
            return{
                showClock:!showClock
            }
        })
    }
    render(){
        const{showClock}=this.state
        return(
            <div className="app-container">
                <button className="toggle-button" onClick={this.onToggleClock} type="button">
                    {showClock?"ShowClock":"HideClock"}
                </button>
                {showClock&&< Clock/>}
            </div>
        )
    }
}

export default App