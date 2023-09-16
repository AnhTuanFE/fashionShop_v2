const MonthlyUsers = () => {
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
            src="https://charts.mongodb.com/charts-fashionshop-soddq/embed/charts?id=64e87f98-1d7a-4ad7-8532-ef78b70e7377&maxDataAge=300&theme=light&autoRefresh=true&attribution=false"
          ></iframe>
        </article>
      </div>
    </div>
  );
};

export default MonthlyUsers;
