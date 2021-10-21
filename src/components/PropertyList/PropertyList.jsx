import PropertyItem from '../PropertyItem/PropertyItem'

const PropertyList = () => {
  return (
    <div className="list-wrapper mt-5">
      <div className="row">
        <div className="col-6">
          <h2 className="text-center">Plus</h2>
          <ul className="list-group list-group-numbered">
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
          </ul>
        </div>

        <div className="col-6">
          <h2 className="text-center">Minus</h2>
          <ul className="list-group list-group-numbered">
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
            <PropertyItem />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
