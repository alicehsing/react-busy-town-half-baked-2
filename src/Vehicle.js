export default function Vehicle(props) {
  return <div className="vehicle">
    {/* the Vehicle component has a prop called vehicle. Check to see what string is in this vehicle prop */}
    {/* if the vehicle props is a car, render a '🚗' emoji */}
    <span>{props.vehicle === 'car' ? ' 🚗 ' : ''}</span>
    {/* if the vehicle props is a truck, render a '🚚' emoji */}
    <span>{props.vehicle === 'truck' ? ' 🚚 ' : ''}</span>
    {/* if the vehicle props is a bus, render a '🚌' emoji */}
    <span>{props.vehicle === 'bus' ? ' 🚌 ' : ''}</span>
    {/* if the vehicle props is a motorcycle, render a '🏍️' emoji */}
    <span>{props.vehicle === 'motorcycle' ? ' 🏍️ ' : ''}</span>
  </div>;
}