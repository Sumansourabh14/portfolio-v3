import H2 from "../text/H2";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 border-y">
      <div className="container mx-auto px-6 max-w-3xl text-center space-y-10">
        <H2 title="Testimonials" />
        <blockquote className="text-muted-foreground text-lg leading-relaxed">
          <p>
            “I highly recommend Suman&asops;s work and work ethic. Suman created{" "}
            <a
              href="https://community.theta360.guide/t/ricoh-theta-client-react-native-demo-for-android/9739"
              className="underline underline-offset-4 hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              a technical article for the RICOH THETA
            </a>{" "}
            developer community of which I am a co-organizer. He was quick to
            understand the topic, testing out the SDK, and asking about issues
            and ideas. The final result beat my expectations handily.”
          </p>
        </blockquote>

        <footer className="text-sm text-zinc-500">
          — Jesse Casman, <cite>Maker of Developer Communities</cite>
        </footer>
      </div>
    </section>
  );
};

export default Testimonials;
