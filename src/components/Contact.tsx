import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { primaryButton } from "@/utils/styles";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-black text-white">

      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">

          <div>

            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              Let’s Work
              <br />
              Together.
            </h2>

            <p className="mt-6 text-gray-400 max-w-lg leading-relaxed">
              Open to backend engineering roles, distributed systems work,
              and scalable infrastructure projects.
            </p>

            <div className="flex gap-6 pt-10">

              <a
                href="https://github.com/vasu101"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>

              <a
                href="https://www.linkedin.com/in/nshekhawat/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>

              <a
                href="mailto:nishantshekhawat@gmail.com"
                aria-label="Email Nishant"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={24} />
              </a>

            </div>

          </div>

          <a href="mailto:nishantshekhawat@gmail.com">

            <Button className={primaryButton}>
              Let’s Talk
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>

          </a>

        </div>

      </div>

    </section>
  );
};

export default Contact;