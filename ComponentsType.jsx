//TODO Типи компонент:
//* 1. Класові компоненти
//* 2. Функціональні компоненти
//* 3. Компоненти вищого порядку
//* 4. Тупі компоненти
//* 5. Розумні компоненти
//* 6. Презентаційні компоненти
//* 7. Контейнерні компоненти

//TODO 3. Компоненти вищого порядку(HOCs)
const hoc = (MyComponent) => (props) => {
  return (
    <div>
      <MyComponent {...props}>{props.children.toUpperCase()}</MyComponent>
    </div>
  );
};
//TODO 4. Тупі компоненти
export default (Title) => () => <h1>I am Title</h1>;

//TODO 5. Розумна компонента
export function Title() {
  const [state, setstate] = useState(initialState);
  return (
    <div>
      <h1>{state.title}</h1>
      <input type="text" value={state} onChange={setstate} />
    </div>
  );
}
//TODO 6. Презентаційна компонента
const List = (props) => (
  <ul>
    {props.list.map((user) => (
        <li>{user.item}</li>
    ))}
  </ul>
);
//TODO 7. Контейнерна компонента
const Data = () => {
    const [state, setstate] = useState(initialState);

    const getData = () => {
        axios.get('/list').then(
            items=>setstate(list:item)
        )
    }
    return (
        <User user={ state.name} />
    )

}