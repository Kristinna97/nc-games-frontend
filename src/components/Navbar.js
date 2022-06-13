import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCategories } from "../api";
import styles from './Navbar.module.css'
const Navbar = () =>{

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories().then(({ categories }) => {
          setCategories(categories);
        });
      }, []);

      return (
        <ul className={styles.navbar}>
            <Link
                className={styles.links}
                to={`/reviews`}
                key="all-reviews"
              >ALL REVIEWS</Link> 
          {categories.map((category) => {
            return (
              <Link
                className={styles.links}
                to={`/${category.slug}`}
                key={category.slug}
              >
                {(category.slug.replaceAll('-', " ")).toUpperCase()}
              </Link>
            );
          })}
        </ul>
      );

}

export default Navbar;