import '../Sass/Pricing.sass'
export const Pricing = ({value}) => {
  return (
    <div
      className="Card--Pricing"
      style={{display:'flex', alignItems:'center'}}
    >
      <span>$</span>
      <h1>{value}</h1>
    </div>
  )
}
