import React, {Component} from 'react';

class Article extends Component{
    // constructor(props) {
    //     super(props) //батьківський конструктор
    //     this.state ={               //this.state this.props це спеціальні атрибути де все зберігаться
    //         isOpen: false
    //     }
    //     //this.handleCLick = handleCLick.bind(this)
    // }
    state = { 
        isOpen: true 
    }     //експерементальний запис

    render(){
        const handleClick = this.handleClick;       // додано щоб усунути помилку Line 21: 'handleCLick' is not defined no-undef
        const {article} = this.props // якщо функція тоді це аргументи а якщо слас тоді в this.props
        const body = this.state.isOpen && <section>{article.text}</section> // якщо є поточний стан тоді покажемо секцію
        return(
            <div className='Hello' style={{color: 'gray'}}>
                <h2>{article.title} 
                <button onClick={this.handleCLick} >Close</button></h2> {/*додано this. handleCLick */}
                {body}
                <h3> Cretion date: {(new Date(article.date)).toDateString()}</h3>
    
            </div>
        )
    }
    handleCLick = () => {          //експеремнтальний запис зімість this.handleCLick = handleCLick.bind(this)
        console.log('===','clicked')
        this.setState({
            isOpen: !this.state.isOpen      //зміна стану відносно попереднього
        })
        // this.setState((prevState, props) => ({
        //     counter: prevState.counter + props.increment
        //   }));                           //правильний запис з документації
    }
}


//function Article(props){

export default Article