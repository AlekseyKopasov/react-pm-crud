import PropertyItem from '../PropertyItem/PropertyItem';

const PropertyList = (props) => {
  return (
    <div className="list-wrapper mt-5">
      <div className="row">
        <div className="col-6">
          <h2 className="text-center">Plus</h2>
          <ul className="list-group list-group-numbered">
            { props.properties.map(p => {
              if (p.type === 'plus') {
                  return  <PropertyItem item={p} key={p.id} type={p.type}/>
                }
                return null;
              }) }
          </ul>
        </div>

        <div className="col-6">
          <h2 className="text-center">Minus</h2>
          <ul className="list-group list-group-numbered">
          { props.properties.map(p => {
              if (p.type === 'minus') {
                  return  <PropertyItem item={p} key={p.id} type={p.type} />
                }
                return null;
              }) }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
