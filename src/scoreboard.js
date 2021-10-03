import React, { Component } from 'react'


class ScoreBoard extends Component {
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this)
        this.sortArray=this.sortArray.bind(this)
        this.state={
            players: [
                { id: 1, name: "Mat", score: 15 },
                { id: 1, name: "Wouter", score: 20 },
                { id: 2, name: "Mike", score: 25 },
                { id: 3, name: "Amo", score: 30 }
            ]
        }
        
    }
    componentDidMount(){
        
        this.sortArray();
    }

    sortArray(){
        this.state.players.sort((a,b) => (a.score<b.score) ? 1:-1)
        console.log(this.state.players)
    }

    handleClick(value){
        
        console.log(value);
        
        this.state.players.map(player => {
            
            if(player.score===value){
                player.score+=1;
               
                console.log(player.score)
                this.setState({
                    player:player.score
                    
                })
                
            }
           
        }
            )
            this.sortArray()
    }
    
    render(){
       
       
        return <div>
            
            { this.state.players.map(player => 
            <>
                <h2>{player.name} &nbsp;&nbsp;&nbsp;&nbsp;{player.score}&nbsp;&nbsp;&nbsp;&nbsp; <button onClick={() => this.handleClick(player.score)}>+</button> </h2>
                
            </>
            )}
            
        </div>
      
    }
}

export default ScoreBoard