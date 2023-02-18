//*? Функціональна компонента. Рекомендовано переходити і в подальшому використовувати функціональні компоненти.

import React from "react";

const Practice = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    effect;
    return () => {
      cleanup;
    };
  }, [input]);
  return <div></div>;
};

export default Practice;

//*! Класова компонента. Не рекомендовано до використання. переходимо на функціональні компоненти з використанням хуків
class Counter extends React.Component {
  state = {
    counter: 0,
  };
  constructor(props) {
    super(props);
    this.handleCLick = this.handleCLick.bind(this);
  }
  handleCLick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div>
        <p>Bla Bla</p>
        <button onClick={this.handleCLick}></button>
      </div>
    );
  }
}
