import "./top-category.css";
import { Link } from "react-router-dom";

const TopCategory = () => {
  return (
    <div className="pilihan-beasiswa">
      <div>
        <p>
          <Link to={"/scholarship/kota"}>Beasiswa Kota</Link>
        </p>
        <p>
          <Link to={"/scholarship/daerah"}>Beasiswa Daerah</Link>
        </p>
        <p>
          <Link to={"/scholarship/nasional"}>Beasiswa Nasional</Link>
        </p>
      </div>
    </div>
  );
};

export default TopCategory;
