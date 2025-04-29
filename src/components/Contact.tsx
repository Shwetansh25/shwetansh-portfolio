export default function Contact() {
  

  
  return (
    <section id="contact" className="py-20 md:py-32 ">
      <div className="container mx-auto px-4">
        <div className=" max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
          <form  className="space-y-4 p-4" >
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="bg-white text-black px-4 py-2 w-full md:w-1/2 rounded-lg"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-white text-black px-4 py-2 w-full md:w-1/2 rounded-lg"
              />
            </div>
            <input 
              type="text" 
              placeholder="Subject" 
              className="bg-white text-black px-4 py-2 w-full rounded-lg"
            />
            <textarea 
              placeholder="Message" 
              className="bg-white text-black px-4 py-2 w-full rounded-lg mt-4"
            ></textarea>
            <button 
              type="submit" 
              className="bg-blue-600 text-black px-6 py-2 rounded-lg mt-4 hover:bg-blue-500 transition-colors"

            >
              Send Message
            </button>
          </form>
          <p className="text-xl text-slate-900-300 mb-12">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
          <div className="space-y-4">
            <a 
              href="mailto:srivastavashwetansh2001@gmail.com"
              className="block text-lg hover:text-black transition-colors"
            >
              srivastavashwetansh2001@gmail.com
            </a>
            <a 
              href="tel:+916387188545"
              className="block text-lg hover:text-black transition-colors"
            >
              +91 6387188545
            </a>
            <a 
              href="https://linkedin.com/in/shwetansh"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-lg hover:text-black transition-colors"
            >
              linkedin.com/in/shwetansh
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

