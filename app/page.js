import Image from "next/image";
import styles from "./page.module.css";



export default function Home() {
  return (
    <div>
      <main className={styles.main}>


        <div className={styles.description}>
          <p>
            This website is a work in progress.&nbsp;
            <code className={styles.code}>Good Things Take Time :)</code>

            {/* <hr /> */}
            {/* <small>This web app was designed with Figma. Figma was also used to make and export components.
              I will be adding my projects, tutorials, certifications, and other things I have done in the past.
            </small> */}
          </p>
          <div>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/avi.svg"
                alt="Avatar"
                // fill
                className={styles.avatar}
                width={220}
                height={220}
                priority

              />
            </a>
          </div>
        </div>

        <div className={styles.hello} >
    Hello, I'm <span style={{color: "rgba(31,57,137,1)", fontWeight: "bold", }}>Victor!</span> 
    {/* Hello, I'm <span style={{color: "rgba(26,47,113,1)", fontWeight: "bold", }}>Victor!</span>  */}
      </div>


       
        <div className={styles.center}>
          Built with &nbsp; &nbsp;

          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />

        </div>


        <div>


        </div>

        {/* <div className={styles.grid}>
        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Summary <span>-&gt;</span>
          </h2>
          <p>This web app was designed with Figma. Figma was also used to make and export components.
            I will be adding my projects, tutorials, certifications, and other things I have done in the past.
          </p>
        </a>
      </div> */}
       <small className={styles.smallText}> This web app was designed with Figma and Bootstrap. Figma was also used to make and export components. 
          <br />
          I will be adding my projects, tutorials, certifications, and other relevant things I have done in the past.
        </small>

        <div className={styles.grid}>
          <a
            href="/projects"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2>
              Projects <span>-&gt;</span>
            </h2>

          </a>

          <a
            href="/certificates"
            className={styles.card}
            
            rel="noopener noreferrer"
          >
            <h2 style={{ width: "165px" }}>
              Certicates <span>-&gt;</span>
            </h2>

          </a>

          <a
            href="/plans"
            className={styles.card}
            
            rel="noopener noreferrer"
          >
            <h2>
              Plans <span>-&gt;</span>
            </h2>

          </a>

          <a
            href="/skills"
            className={styles.card}
            
            rel="noopener noreferrer"
          >
            <h2>
              Skills <span>-&gt;</span>
            </h2>

          </a>
        </div>
       
      </main>
    </div>
  );
}
