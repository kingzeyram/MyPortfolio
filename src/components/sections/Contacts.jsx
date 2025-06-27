<section id="contact" className="min-h-screen flex items-center justify-center py-20 px-4">
  <RevealOnScroll>
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
        Get in Touch
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          required
          placeholder="Your name"
          className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder:text-gray-300 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          required
          placeholder="example@gmail.com"
          className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder:text-gray-300 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <textarea
          name="message"
          value={formData.message}
          required
          rows={5}
          placeholder="Your message..."
          className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder:text-gray-300 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 resize-none"
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  </RevealOnScroll>
</section>
