import Link from "next/link";
import H2 from "../text/H2";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6 max-w-2xl text-center space-y-10">
        <H2 title="Contact Me" />
        <p className="text-muted-foreground">
          I’m currently{" "}
          <span className="text-primary font-medium">
            open to Frontend or Full Stack Developer roles.
          </span>{" "}
          Feel free to reach out.
        </p>

        <Link
          href="mailto:sumsourabh14@gmail.com"
          className="inline-block rounded-full bg-black text-white px-8 py-3 text-sm font-medium hover:bg-zinc-800 transition"
        >
          Send me an email
        </Link>

        <p className="text-muted-foreground">
          or connect via{" "}
          <Link
            href="https://www.linkedin.com/in/sumansourabh14"
            className="underline underline-offset-4 hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </Link>{" "}
          or{" "}
          <Link
            href="https://x.com/sumansourabh48"
            className="underline underline-offset-4 hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
