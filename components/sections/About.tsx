import H2 from "../text/H2";

export default function About() {
  return (
    <section id="about" className="bg-background text-foreground py-24 px-4">
      <div className="max-w-4xl mx-auto space-y-10">
        <H2 title="About Me" />

        <div className="space-y-5 text-muted-foreground text-base leading-relaxed">
          <p>
            Hi, I’m{" "}
            <span className="text-foreground font-medium">Suman Sourabh</span>{" "}
            from India. I started my web development journey in 2022 at{" "}
            <a
              href="https://www.linkedin.com/company/ansrsource/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              ansrsource
            </a>
            , and since then, I’ve built several web and mobile applications.
          </p>

          <p className="text-primary font-medium">
            Currently open to Frontend / Full Stack Developer roles.
          </p>

          <p>
            I’ve written{" "}
            <a
              href="https://auth.geeksforgeeks.org/user/sumsourabh14/articles"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              technical articles on GeeksforGeeks
            </a>{" "}
            and actively share blogs on Medium (1,200+ followers), Dev.to, and
            Hashnode.
          </p>

          <p>
            Outside of tech, I enjoy reading fiction, writing personal essays,
            listening to Lo-fi, and watching football.
          </p>
        </div>
      </div>
    </section>
  );
}
