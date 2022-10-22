import '../Sass/Pricing.sass'
export const Pricing = ({value}) => {
  return (
    <div
      className="Card--Pricing"
    >
      <span>$</span>
      <h1>{value}</h1>
    </div>
  )
}
