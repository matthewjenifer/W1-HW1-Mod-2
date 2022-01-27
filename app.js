//Sidebar
class Sidebar extends React.Component {
    render(){
        return(
        <div id="sidebar">
            <ol><h2>Dashboard</h2></ol>
            <ol><h2>Widget</h2></ol>
            <ol><h2>Reviews</h2></ol>
            <ol><h2>Customers</h2></ol>
            <ol><h2>Online Analysis</h2></ol>
            <ol><h2>Settings</h2></ol>
        </div>
        )
    }
    
}

//Reviews
class Reviews extends React.Component {
    render(){
        return(
            <div id="reviews">
            <h2>Reviews</h2>
            <h3>1,281</h3>
        </div>
        )
    }
    
}

//Rating
class Rating extends React.Component {
    render(){
        return(
        <div id="rating">
            <h2>Average Rating</h2>
            <h3>4.6</h3>
        </div>
        )
    }
    
}

//Analysis
class Analysis extends React.Component {
    render(){
        return(
        <div id="analysis">
            <h2>Sentiment Analysis</h2>
            <h3>960</h3>
            <h3>122</h3>
            <h3>321</h3>
        </div>
        )
    }
    
}

//Visitors
class Visitors extends React.Component {
    render(){
        return(
        <div id="visitors">
            <h2>Website Visitors</h2>
            <h3>821</h3>
        </div>
        )
    }
    
}

//Main App
class App extends React.Component {
    render() {
        return(
            <div class="page">
                <Sidebar />
                <Reviews />
                <Rating />
                <Analysis />
                <Visitors />
            </div>
        )
    }
    
}



ReactDOM.render(
    <App />,
    document.querySelector('#root')
);