import App from './App';
import {connect} from 'react-redux';
import { loadMyMovieList } from './actions';
import PropTypes from 'prop-types';


function mapStateToProps(state) {
    return {
        searchResults: state.searchResults,
        myMovieList: state.myMovieList
    };
}

function mapDispatchToProps(dispatch){
    return {
        loadMyMovieList: function(){
            let action = loadMyMovieList();
            dispatch(action);
        }
    };
}
App.PropTypes = {
    searchResults: PropTypes.array.isRequired,
    myMovieList: PropTypes.array.isRequired
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(App);




