import { Description } from "./Description"
import { Pricing } from "./Pricing"
import { Title } from "./Title"
import '../Sass/Card.sass'

export const Card = ({title, value, storage, memory, users}) => {
  return (
    <div className="Card">
        <Title title={title}/>
        <Pricing value={value}/>
        <Description Storage={storage} Memory={memory} Users={users}/>
        <button className="Card--Button">LEARN MORE</button>
    </div>
  )
}
