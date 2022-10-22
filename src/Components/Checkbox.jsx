import '../Sass/Checkbox.sass'
export const Checkbox = () => {
  return (
    <div className='container'>
        <span>Annually</span>
        <div className="checkbox">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox"></label>
        </div>
        <span>Monthly</span>
    </div>
  )
}
