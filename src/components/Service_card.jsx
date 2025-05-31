const Service_card = ({service_name,service_desc}) => {
  return (
    <div>
        <div>
            <h6>Our Service</h6>
            <h1>{service_name}</h1>
            <p>{service_desc}</p>
        </div>
    </div>
  )
}

export default Service_card