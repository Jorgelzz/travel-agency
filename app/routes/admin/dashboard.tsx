import { Header, StatsCard, TripCard } from "~/components";
import { allTrips, dashboardData, user } from "~/constants";

const Dashboard = () => {
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome back, ${user?.name ?? "Guest"} 👋`}
        description="Manage your admin dashboard and settings"
      />
      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full">
          <StatsCard
            headerTitle="Total Users"
            value={dashboardData.totalUsers}
            currentMonth={dashboardData.usersJoined.currentMonth}
          />
          <StatsCard
            headerTitle="Total Trips"
            value={dashboardData.totalTrips}
            currentMonth={dashboardData.tripsCreated.currentMonth}
          />
          <StatsCard
            headerTitle="Active Users"
            value={dashboardData.usersJoined.today}
            currentMonth={dashboardData.usersJoined.currentMonth}
          />
        </div>
      </section>
      <section className="flex flex-col gap-6">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"></section>
        <section className="container">
          <h1 className="text-xl font-semibold text-dark-100">Created Trips</h1>
          <div className="trip-grid">
            {allTrips.slice(0, 4).map((trip) => (
              <TripCard
                key={trip.id}
                id={trip.id.toString()}
                name={trip.name}
                location={trip.itinerary[0]?.location || "Unknown"}
                imageUrl={trip.imageUrls[0]}
                price={trip.estimatedPrice}
                tags={trip.tags}
              />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default Dashboard;
