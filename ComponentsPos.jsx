// Притримуємось одного стилю створення компонент.Однотипні функції розміщаємо в одному місці. 
// Використовуємо однаковий тип експорту та однаковий принцип найменування компонент.

//** */ Назви компонент
//*! Не використовуємо компоненти без назв
export default () => <form>......</form>

//*? Називаємо свої компоненти
export default function Form() {
    return <form>....</form>
}

//** */ Додаткові функції

//*? Функції, яким не потрібні дані з компоненти, виносимо перед оголошенням компоненти та після import
import {} from ''

function Component({ getData }) {

    function Data(getData) {
    console.log(Data);
}
    return <div>{Data(getData)}</div>
}

//*! Не варто так робити

function Component({ getData }) {
    function Data(sameData) {
        console.log(Data);
    }
    return <div>......</div>
}

//*! Додаткові функції не повині читати значення з стану компоненти

export function Component() {
    const [value, setValue] = useState('')
    
    function isData(Data) {
        console.log(Data);
    }
    return (
        <div>
            <input type="text" value={value}
                onChange={e=> setValue(e.target.value)}
            />
            <button
                onClick={() => {
                    if (isData) {
                        // ..
                    }
            }}
            
            >Enter</button>
    </div>
)

}

//*? Пропишіть їх зовні та передавайте лише необхідні значення

import { } from ''

function isData(value) {
        console.log(value);
}
  export function Component() {
    const [value, setValue] = useState('')
    
    return (
        <div>
            <input type="text" value={value}
                onChange={e=> setValue(e.target.value)}
            />
            <button
                onClick={() => {
                    if (isData) {
                        // ..
                    }
            }}
            
            >Enter</button>
    </div>
)
  }

//*    Розмітка JSX
//*! Намагаємось не притримуватись статичниї розмітки. Статичну розмітку важко підтримувати
function Filters({ onFilterClick }) {
    return (
        <div>
            <p>Марки авто</p>
            <ul>
                <li>
                    <div onClick={()=> onFilterClick('Sedan')}>Porsh</div>
                </li>
                <li>
                    <div onClick={()=> onFilterClick('Parket')}>BMW</div>
                </li>
                <li>
                    <div onClick={()=> onFilterClick('Mini')}>Audi</div>
                </li>
            </ul>
        </div>
    )
}

//*? Використовуємо цикли та об'єкти з налаштуваннями


const MARKS = [
    {
        id: 'Sedan',
        name: 'Porsh'
    },
        {
        id: 'Parket',
        name: 'BMW'
    },

            {
        id: 'Mini',
        name: 'Audi'
    }

]

function Filters({ onFilterClick }) {
    return (
        <div>
            <p>Марки авто</p>
            <ul>
                {MARKS.map(mark => (
                    <li>
                        <div onClick={() => onFilterClick(mark.id)}>{ mark.name}</div>
                   </li> 
                ))}
            </ul>
        </div>
    )
}

//* Розмір компонент
// Якщо функція виконує занадто багато задач, варто винести частину логіку в інші функції.Те саме стосується і компонент. 
// Компоненти не мають бути надто складними. Варто розбивати на дрібні компоненти. 


// JSX коментарі
//*? В складних або незрозумілих частинах коду варто залишати коментарі. 
//*? Також зафіксуйте собі правило, під час роботи над проектом у разі вимушеної перерви залишати коменти в місці зупинки. 
//*? Прописувати в README.md (для прикладу точку де зупинились)

const Component = () => {
    return
    <div>
        //TODO Якщо користувач оформив підписку, відображаємо йому цю компоненту
        <OtherComponent/>
    </div>
}

//* Запобіжники
// Використовуються для того, щоб при винекненні помилок в компоненті, дана помилка не впливала на відображення інтерфейсу.


function MainComponent() {
    return (
        <ErrorBoundary>
<Component/>
</ErrorBoundary>
    )
}

//* Деструктуризація props
//*! Не повторюємо  props  в кожній компоненті
function Input(props) {
    return <input value={props.value} onChange={props.onChange} type="text" />
}

//*? Деструктуризуйте props та використовуйте значення в явному вигляді. 
function Copmponent({value, onChange}) {
    const [state, setState] = useState('')
    return <div>....</div>
}

// *PROPS
// Уникаємо складних компонент з великою кількістю переданих даних через props. 
// Якщо в компоненту отримуємо понад 5 props варто таку компоненту роздробити на окремі копоненти

//* Передаємо об'єкти замість примітивних типів даних
// Щоб не генерувати велику кількість пропсів передаючи окремі примітивні дані, варто їх обєднати у обєкт
// Далі передавати сформований обєкт та використовувати його властивості та методи. 

//*! Не пердавайте значення по одному
<userPrifile
    bio={user.bio}
    name={user.name}
    email={user.email}
/>

// *? Натомість використовуємо об'єкт
{/* <userPrifile2 user={user} /> */}

// Умовний рендеринг
//*! Намагаємось уникати коротких розрахунків
const Component = () => {
    const count = 0
    return <div>
        {count && <h1>Повідомлення: {count}</h1>}
    </div>
}

//*? Використовуємо тернарні оператори
const Component = () => {
    const count = 0
    return <div>
                {count ? <h1>Повідомлення: {count}</h1>:null}

    </div>
}

//* Вкладенні тернарні оператори
//*! Вкладенні тернарні оператори складно читати
isSubscribe ? (
    <Article1/>
) : isReg ? (
    <Content2 />) : (
    <Content3/>
        )
//*? Вилучайте їх в окремий компонент
function Component1({ sub, reg }) {
    if (sub) {
        return <Article1/>
    }
    if (reg) {
        return <Content2/>
    }
    return <Content3/>
}

function Component2() {
    return
    <newComponent
        sub={sub}
        reg={reg}
    />
}

//* Списки
// Якщо список, який потрібно перебрати довгий, його варто винести в додаткову компоненту
//*! Не об'єднуйте цикли з іншою розміткою
function Component({ top, page, articles, onNextPage }) {
    return (
        <div>
            <h1>{top}</h1>
            {articles.map(article => (
                <div>
                    <h3>{article.title}</h3>
                    <p>{article.text}</p>
                    <img src={article.img} alt="" />
                </div>
            ))}
            <div>Ви знаходитесь на сторінці {page}</div>
            <button onClick={onNextPage}>Далі</button>
        </div>
    )
}

//*? Вилучаємо список в окремий компонент
function Component ({ top, page, articles, onNextPage }) {
    return (
        <div>
            <h1>{top}</h1>
            <ArticleList articles={articles} />               
            <div>Ви знаходитесь на сторінці {page}</div>
            <button onClick={onNextPage}>Далі</button>
        </div>
    )
}

//* Дефолтні пропси
//*! не присвоюйте значення пропсів по дефолту за межами функції
function Component({ title, tags, sub }) {
    return <div>...</div>
}

Component.defaultProps = {
    title: '',
    tags: [],
    sub: false,
}

function Component({title='', tags=[], sub=false}) {
    return <div></div>
}

//* Вкладенні функції рендерингу
//*! Не вкладуємо одні компоненти в інші
function Component() {
    function render() {
        return <header>....</header>
    }
    return <div>...</div>
}

//*? Вилучайте такі компоненти в окремі компоненти
import Header from ""
import { useReducer } from "react";

function Component() {
    return <div><Header/></div>
}

//* Управління станом
//*! Не використовумо занадто багато частин стану
const DATA = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large'
}
function Component() {
    const [isOpen, setIsOpen] = useState(false)
    const [data, setData] = useState(DATA.LARGE);
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    return (
    <div></div>
)
}
//*? Уніфікуйте їх за допомогою Reducer
const DATA1 = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large'
}
const initialState = {
    isOpen: 'false',
    data: DATA.LARGE,
    phone: '',
    email: '',
    error: null
}

const reducer = (state, action) => {
    switch (action.type) {
        // ...
        default:
            return state
    }
}

function Component() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>...</div>
    )
}

//* Хуки проти рендер-props
//*! Ми не використовуємо рендер -пропси
function Component() {
    return (
        <div>
            <Header />
            <Form>
                {({ values, setValues }) => (
                    <input
                        value={values.name}
                        onChange={e =>setValues('name, e.target.value')}/>
                    <input
                        value={values.password}
                    onChange={e=>setValues('password', e.target.value)}/>
                )}
            </Form>
            <Footer/>
        </div>
    )
}
//*? Використання hooks
function Component() {
    const [values, setValue] = useForm()
}
return (
    <div>
        <Header />
        <input type="text" value={values.name} onChange={e => setValue('name', e.target.value)} />
        <input type="text" value={values.password} onChange={e => setValue('password', e.target.value)} />
        <Footer/>
    </div>
)

