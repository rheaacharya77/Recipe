import React, { Component } from 'react';
import { connect } from 'react-redux';
import { recipedetail } from '../redux/action';





export class Recipe extends Component {
  componentDidMount() {
    this.props.fetchrecipe(this.props.match.params.strMealid);

  }
  render() {
    const {  fetchone } = this.props;

    return(
        <div>
            <img src={fetchone.strMealThumb} />
                     {fetchone.strMeal}
                     {fetchone.strTags}
                     {fetchone.strCategory}
          </div>
      
    );

   
  }
}

const mapStateToProps = state => ({
  
  fetchone: state.fetchone
});

const mapDispatchToProps = dispatch => {
    return {
         fetchrecipe: (fetchone)=> dispatch(recipedetail(fetchone))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe);