// /components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="mb-4">&copy; 2024 The Interiux. All rights reserved.</p>
          <div className="mt-4 space-x-6">
            <a href="https://www.facebook.com" className="text-gray-400 hover:text-white">
              Facebook
            </a>
            <a href="https://www.instagram.com" className="text-gray-400 hover:text-white">
              Instagram
            </a>
            <a href="https://www.twitter.com" className="text-gray-400 hover:text-white">
              Twitter
            </a>
          </div>
          <div className="mt-4">
            <a href="mailto:info@theinteriux.com" className="text-gray-400 hover:text-white">
              info@theinteriux.com
            </a>
          </div>
        </div>
      </footer>
    );
  }
  