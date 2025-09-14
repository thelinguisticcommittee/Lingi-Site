import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-surface text-white border-t border-accent/20 py-8">
      <div className="max-w-6xl mx-auto text-center px-4 space-y-4">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} The Linguistic Committee. All rights
          reserved.
        </p>

        <div className="space-y-3">
          <p className="text-sm font-medium">Developed by –</p>

          <div className="flex justify-center items-center gap-2 text-sm">
            <span className="font-medium">Suyash Pathak</span>
            <a
              href="https://www.linkedin.com/in/suyash-pathak-4347b5283/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors"
            >
              <FaLinkedin className="text-lg hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:suyashp271@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors"
            >
              <FaEnvelope className="text-lg hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="flex justify-center items-center gap-2 text-sm">
            <span className="font-medium">Shourya Gupta</span>
            <a
              href="https://www.linkedin.com/in/shourya-gupta-8a8876250/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors"
            >
              <FaLinkedin className="text-lg hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:awayontech@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors"
            >
              <FaEnvelope className="text-lg hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        <p className="text-xs text-muted mt-4"><b>The Linguistic Committee </b></p>
      </div>
    </footer>
  );
}
