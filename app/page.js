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
              {/* By{" "} */}
              <Image
                src="/avatar.svg"
                alt="Avatar"
                // fill
                className={styles.avatar}
                width={220}
                height={220}
                // sizes="(max-width: 702px) 3vw, (max-width: 1200px) 5vw, 10vw"
                priority

              />
            </a>
          </div>
        </div>
        {/* <div className={styles.center}>
    Hello There
      </div> */}


       
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
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 style={{ width: "165px" }}>
              Certicates <span>-&gt;</span>
            </h2>

          </a>

          <a
            href="res.pdf"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Resume <span>-&gt;</span>
            </h2>

          </a>

          <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Contact <span>-&gt;</span>
            </h2>

          </a>
        </div>
       
      </main>
    </div>
  );
}
