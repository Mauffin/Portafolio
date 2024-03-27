import styles from "./navbar.module.css"

const navbar = () => {
  return (
    <nav className={styles.navmain}>
      <ul>
        <li>Inicio</li>
        <li>Proyectos</li>
        <li>Contactar</li>
      </ul>
    </nav>
  )
}

export default navbar