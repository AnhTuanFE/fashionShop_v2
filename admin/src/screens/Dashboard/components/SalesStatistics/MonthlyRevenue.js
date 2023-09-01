const MonthlyRevenue = () => {
  return (
    <div className="col-xl-12 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <iframe
            title="monthlyUsers"
            style={{
              background: '#FFFFFF',
              border: 'none',
              borderRadius: '2px',
              boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2);',
              width: '100%',
              height: '350px',
            }}
            src="https://charts.mongodb.com/charts-fashionshop-soddq/embed/charts?id=64e881f8-a8b4-4482-8e20-37d3b40edb57&maxDataAge=300&theme=light&autoRefresh=true&attribution=false"
          ></iframe>
        </article>
      </div>
    </div>
  );
};

export default MonthlyRevenue;
