import { Description } from "./Description"
import { Pricing } from "./Pricing"
import '../Sass/Card.sass'

export const Card = ({title, value, storage, memory, users, theme}) => {
  return (
    <div className='Card' data-theme={theme}>
        <h2>{title}</h2>
        <Pricing value={value}/>
        <Description Storage={storage} Memory={memory} Users={users}/>
        <button className="Card--Button">LEARN MORE</button>
    </div>
  )
}
