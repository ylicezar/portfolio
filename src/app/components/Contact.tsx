import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg text-gray-300">
            I'm always interested in hearing about new opportunities and exciting projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-gray-300 mb-6">
                Whether you have a question or just want to say hi, feel free to reach out.
                I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-4">
              <a href="mailto:alex.morgan@email.com" className="flex items-center gap-3 text-gray-300 hover:text-indigo-400 transition-colors">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <span>alex.morgan@email.com</span>
              </a>

              <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-indigo-400 transition-colors">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <span>+1 (555) 123-4567</span>
              </a>

              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <span>San Francisco, CA</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-indigo-500 text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-indigo-500 text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-indigo-500 text-white resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400">
            © 2026 Alex Morgan. Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}
