import styles from "./Header.module.css"
const Header = () => {
    return<>
       
         <div className={styles.header}>
         <img className={styles.logo}  src={require('../logo.png')}></img>
           <h1 className={styles.title}> NC Games</h1>
         </div>
         
         </>
    
}

export default Header;