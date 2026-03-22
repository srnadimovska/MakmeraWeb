import { useEffect, useState } from "react";
import { client } from "../sanityClient";
import { urlFor } from "../imageBuilder";
import styles from "./Category.module.css";

function Industrial(){
    const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client.fetch(
        `*[_type == "product" && category == "industrial"] {
         _id,
    name,
    description,
    weightCapacity,
    weightResolution,
    image}`,
      )
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  if (loading) return <p>Loading retail scales...</p>;
  if (!products.length) return <p>No retail scales found.</p>;

    return(
        <div className={styles.categoryWrapper}>
              <h2>INDUSTRIAL SCALES</h2>
              <div className={styles.grid}>
                {products.map((p) => (
                  <div key={p._id} className={styles.card}>
                    {p.image && (
                      <img
                        src={urlFor(p.image).width(300).height(300).url()}
                        alt={p.name}
                      />
                    )}
                    <h3>{p.name}</h3>
                    <p>{p.description}</p>
                    <ul>
                      {p.weightCapacity && <li>Capacity: {p.weightCapacity}</li>}
                      {p.weightResolution && <li>Resolution: {p.weightResolution}</li>}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
    )
}
export default Industrial