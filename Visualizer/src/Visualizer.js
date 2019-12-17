import React,{Component} from 'react'
import './Visualizer.css'
import BubbleSort from './BubbleSort'

class Visualizer extends Component{
    constructor(props){
        super(props)
        this.state={
            array:[]
        }
    }
    componentDidMount(){
        this.resetArray();
    }
    
    resetArray(){
        const array=[]
        for(let i=0;i<100;i++){
            array.push(randomIntFromInterval(5,730))
        }
        this.setState({array})
    }
    render(){
        const array=this.state
        
    
    
        bubbleSort() {
                const a=this.state.array
                const k=99
                for(let i=0;i<98,i++){
                    for(let j=0;j<98;j++){
                        if(array[j]>array[j+1]){
                                
                                //color change for a[j] and a[j+1]
                                
                                const temp=array[j]
                                array[j]=array[j+1]
                                array[j+1]=temp
                        }
                    }
    
                        //colour change for a[k];k--;
    
                }
        }
    
        return(
            
                <div className="array-container" >
                {array.map((value,idx)=>{
                <div className="array-bar" key={idx} style={{height:`${value}px`}}>
                </div>
            })}
            <button onClick={()=>this.resetArray()}>Generate new Array</button>
            <button onClick={()=>BubbleSort()}>bubbleSort</button>
            </div>
        
            
        )
    
        function randomIntFromInterval(min,max){
            return Math.floor(Math.random()*(max-min+1)+min)
        }
    }
    
}

//initial colour for all




export default Visualizer