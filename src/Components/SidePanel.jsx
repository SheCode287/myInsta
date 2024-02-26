function SidePanel(props) {
  return (
    <>
      <div className="card">
        <img  src={props.image} alt="" />
        <figcaption>{props.user}</figcaption>
      </div>
    </>
  )
}

export default SidePanel
