export default function PortfolioSection() {
  return (
    <section id="portfolio" className="space-y-6">
      <h2 className="text-3xl font-bold">Portfolio</h2>

      {/* Example project */}
      <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
        <h3 className="text-xl font-semibold">
          E-commerce Platform for XYZ Retail
        </h3>
        <p className="text-sm text-gray-500">
          Technologies: React, Node.js, MongoDB, AWS
        </p>

        <div>
          <h4 className="font-bold">Situation:</h4>
          <p>
            XYZ Retail wanted a scalable, mobile-friendly e-commerce platform to
            boost sales and streamline inventory.
          </p>
        </div>

        <div>
          <h4 className="font-bold">Task:</h4>
          <p>
            Develop a full-stack app with smooth UX and fast performance,
            integrating payment and inventory systems.
          </p>
        </div>

        <div>
          <h4 className="font-bold">Action:</h4>
          <p>
            Built responsive UI with React, REST APIs with Node.js, and hosted
            on AWS with CI/CD for quick deployments.
          </p>
        </div>

        <div>
          <h4 className="font-bold">Result:</h4>
          <p>
            Achieved a 35% sales boost in 3 months, great user feedback, and
            reduced inventory management work.
          </p>
        </div>
      </div>
    </section>
  );
}
