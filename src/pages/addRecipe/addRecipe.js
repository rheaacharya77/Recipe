import React from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import { addrecipe } from '../../redux/action';
import './addRecipe.css';



class Addrecipe extends React.Component{

    
        constructor(props) {
            super(props);  
            this.state = {
                name: '',
                category:'',
                ingredients:'',
                instructions:''
            }

            };

            submitHandler = (e) => {
                e.preventDefault();
                      this.props.updatelist(this.state)
               
                this.setState({
                    name: '',
                    category:'',
                    ingredients:'',
                    instructions:''
                       
                 })
             }
            
             detectChange = (e) => {
                   this.setState({
                       [e.target.name] :e.target.value,
                      
                   })
                 }

            
           render() {
               const {name,category,instructions,ingredients} = this.state
            return(
            <div>
            <div className="form">
                <form onSubmit={this.submitHandler} className="form-content">
                    
                    <input type="text" placeholder="Enter recipe name" name="name" id="rname" value={name}
                    onChange={this.detectChange} />
                    
                     <input type="text" placeholder="Enter category" name="category" id="category" value={category}
                    onChange={this.detectChange} />
                  
                    <textarea type="text" placeholder="Enter ingredients" rows="4" cols="50" name="ingredients" id="ingredients" value={ingredients}
                    onChange={this.detectChange} />
                  
                    <textarea className="last" type="text" placeholder="Enter instructions" name="instructions" id="instructions" value={instructions}
                    onChange={this.detectChange} />
                     
                   <button type="submit" className="cat">Add </button>
                 
               </form>
            </div>
           
            </div>
            
               );
           }
        }
        



        const mapDispatchToProps = dispatch => {
            return {
                 updatelist: (rec)=> dispatch(addrecipe(rec))
            }
        }

        export default connect(null, mapDispatchToProps)(Addrecipe); 
       