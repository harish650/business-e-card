import React,{Component} from "react";
import "./form.css"
class form extends Component{
    constructor(props){
        super(props)
        this.state={
            contactno:'',
            location:'',
            whatsappno:'',
            email:'',
            website:'',
            
        } 
    }

    contactnochange  = event =>{
        this.setState({
            contactno:event.target.value
        })
    }
    locchange = event =>{
        this.setState({
            location:event.target.value
        })
    }
    
    whatsappnochange  = event =>{
        this.setState({
            whatsappno:event.target.value
        })
    }
    emailchange  = event =>{
        this.setState({
            email:event.target.value
        })
    }
    websitechange  = event =>{
        this.setState({
            website:event.target.value
        })
    }
    handlesubmit = event =>{
        alert(this.state.contactno + this.state.location + this.state.whatsappno + this.state.email + this.state.website)
    }
    render(){
        return(
            <form onSubmit={this.handlesubmit} className="pos">

                <div className="text">
                    <label className="pos1" >contactno
                    <input className="pos2"
                     type='text' 
                     value={this.state.contactno}
                     onChange={this.contactnochange}
                    />
                    </label>
                </div>

                <div className="text1">
                    <label>location</label>
                    <input 
                    type='text'
                    value={this.state.location}
                     onChange={this.locchange}
                     >
                     </input>
                </div>

                <div className="text2">
                    <label>whatsappno</label>
                    <input
                    type='text'
                    value={this.state.whatsappno}
                    onChange={this.whatsappnochange}
                    >
                    </input>
                </div>

                <div className="text3">
                    <label>email</label>
                    <input
                    type='text'
                    value={this.state.email}
                    onChange={this.emailchange}
                    >
                    </input>
                </div>

                <div className="text4">
                    <label>website</label>
                    <input
                    type='text'
                    value={this.state.website}
                    onChange={this.websitechange}
                    >
                    </input>
                </div>

                
                <button type='submit' className="text3">submit</button>
            </form>
        )
    }
}

export default form