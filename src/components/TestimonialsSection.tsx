export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="space-y-6">
      <h2 className="text-3xl font-bold">Testimonials</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="italic">
            &quot;Working with them was a fantastic experience. They delivered
            the project on time and exceeded expectations.&quot;
          </p>
          <p className="mt-4 font-semibold">– John Doe, CEO of StartupX</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <p className="italic">
            &quot;Highly skilled developer who communicates clearly and delivers
            high-quality work.&quot;
          </p>
          <p className="mt-4 font-semibold">– Jane Smith, Product Manager</p>
        </div>
      </div>
    </section>
  );
}
