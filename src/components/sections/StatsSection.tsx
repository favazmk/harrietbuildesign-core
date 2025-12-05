const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "100+", label: "Projects Completed" },
  { value: "5+", label: "Expert Team Members" },
  { value: "10+", label: "Areas Served" },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2 font-serif">
                {stat.value}
              </p>
              <p className="text-primary-foreground/80 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
