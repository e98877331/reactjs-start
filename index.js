import React from 'react'
import { render } from 'react-dom'



   if (module.hot) {
   module.hot.accept();
   }
   




let Main = ({title, content, changePage}) => (
  <div>
    <p>Page0: {title}</p>
    <p>Page0 content here: {content}</p>
    <button onClick={(e) =>{
      changePage(1)
    }}>to page 1</button>
</div>
)



let Main1 = ({title, content, changePage}) => (
  <div>
    <p>Page1aaa: {title}</p>
    <p>Page1 content here: {content}</p>
    <button onClick={(e) =>{
      changePage(0)
    }}>to page 0</button>
</div>
)


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {page: 0}
    this.changePage = this.changePage.bind(this)
  }

  changePage(page){
   this.setState({page: page})
  }

  render(){
    if(this.state.page === 0){
      return <Main title={'page0 title'} content={'page0 content'} changePage={this.changePage} />
    }
    else if(this.state.page ===1){
      return <Main1 title={'page1 title'} content={'page1 content'} changePage={this.changePage}/>
    }



  }

}   



render(
  <App />,
    document.getElementById('root')
)
