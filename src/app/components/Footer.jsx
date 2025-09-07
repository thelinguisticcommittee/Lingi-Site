import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-surface text-white border-t border-accent/20 py-8">
      <div className="max-w-6xl mx-auto text-center px-4 space-y-2">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Your Committee. All rights reserved.
        </p>
        <p className="flex justify-center items-center gap-2 text-sm">
          Developed by{" "}
          <a
            href="https://www.linkedin.com/in/suyash-pathak-4347b5283/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
          >
            <FaLinkedin className="text-lg hover:scale-110 transition-transform" />
            <span className="font-medium">Suyash Pathak</span>
          </a>
        </p>
      </div>
    </footer>
  );
}
