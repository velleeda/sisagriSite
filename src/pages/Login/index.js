import styles from "./login.module.scss";
import logo from "../../assets/logoSisagri.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import whatsapp from "../../assets/whatsapp.png";

export function Login() {
  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.logoSisagri}
          src={logo}
          alt="Logo from the Sisagri company"
        />

        <div className={styles.formContainer}>
          <h1>Acesse a sua conta</h1>

          <input
            className={styles.empresaInput}
            type="text"
            required
            placeholder="Empresa"
          />

          <input
            className={styles.usuarioInput}
            type="text"
            required
            placeholder="Usuario"
          />

          <input
            className={styles.senhaInput}
            type="password"
            required
            placeholder="Senha"
          />

          <div className={styles.passwordRecovery}>
            <a href="https://google.com">Esqueceu sua senha?</a>
          </div>

          <button>
            <p>Login</p>
          </button>

          <div className={styles.formFooter}>
            Não possui uma conta?
            <br />
            <a href="https://google.com">Solicitar cadastro</a>
          </div>
        </div>

        <div className={styles.description}>
          <h1>
            Tecnologia com soluções
            <br />
            para o agronegócio
            <br />
          </h1>

          <p>
            Facilitamos a adequação ás legislações
            <br />
            referentes a rastreabilidade vegetal,
            <br />
            garantido a segurança dos alimentos.
          </p>

          <div>
            <img src={facebook} alt="Facebook logo" />

            <img src={instagram} alt="Instagram logo" />

            <img src={whatsapp} alt="Whatsapp logo" />
          </div>
        </div>
      </div>
    </>
  );
}
