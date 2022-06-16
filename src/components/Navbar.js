import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCategories } from "../api";
import MobileNav from './MobileNav.js'
import styles from './Navbar.module.css'
import React  from 'react';
const Navbar = () =>{

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories().then(({ categories }) => {
          setCategories(categories);
        });
      }, []);

      return (<>
        <MobileNav categories={categories} />
        <ul className={styles.navbar}>
            <Link
                className={styles.links}
                to={`/`}
                key="home"
              >HOME</Link> 
            <Link
                className={styles.links}
                to={`/reviews`}
                key="all-reviews"
              >ALL REVIEWS</Link> 
          {categories.map((category) => {
            return (
              <Link
                className={styles.links}
                to={`/reviews/category/${category.slug}`}
                key={category.slug}
              >
                {(category.slug.replaceAll('-', " ")).toUpperCase()}
              </Link>
            );
          })}
        </ul>
        </>
      );

}

export default Navbar;