import { Header, StatsCard } from "~/components";
import { allTrips, dashboardData, user  } from "~/constants";

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
        <section className="container">
          <h1 className="text-xl font-semibold">
            Created Trips
          </h1>
          <div className="trip-grid">
            {allTrips.slice(0, 4).map((trip) => (
              <div key={trip.id} className="trip-card">
                <img src={trip.imageUrls[0]} alt={trip.name} className="w-full h-32 object-cover rounded-md" />
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
};

export default Dashboard;
