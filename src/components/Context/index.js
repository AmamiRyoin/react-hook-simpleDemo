import React, { Component,useState,useEffect,useContext } from 'react';

const ThemeContext = React.createContext();

//运行APP
class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = () => { //设定toggle方法，会作为context参数传递
      let themes = {
        light:'#f00',
        dark:'#ff0'
      }
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    this.state = {
      theme: '#f00',
      toggle: this.toggle,
    };
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <br/>
        <h3>Context</h3>
        <Content />
      </ThemeContext.Provider>
    );
  }
}

//中间组件
function Content() {
  return (
    <div>
      <Button/>
    </div>
  );
}

//接收组件
function Button() {
  const context = useContext(ThemeContext) 
  const [count,setCount] = useState(0);
  console.log("aaaaaaaaaaa\n",context)
  return (
    // <ThemeContext.Consumer>
    //   {({theme, toggle}) => {
    //     console.log(theme)
    //     return (
    //       <button
    //         onClick={toggle} //调用回调
    //         style={{backgroundColor: theme}}>
    //         Toggle Theme
    //       </button>
    //     )
    //   }}
    // </ThemeContext.Consumer>
    <div>
      <button
        onClick={context.toggle} //调用回调
        style={{backgroundColor: context.theme}}>
        Toggle Theme
      </button>
    </div>
  );
}

export default App;