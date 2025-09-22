import { Header, StatsCard, TripCard } from "~/components";

const Dashboard = () => {
  const user = {
    name: "John Doe",
  };
  const dashboardData = {
    totalUsers: 1200,
    usersJoined: { today: 25, thisWeek: 150, thisMonth: 600 },
    totalTrips: 0,
    tripsCreated: { currentMonth: 80, lastMonth: 70 },
    userRole: { totalAdmins: 5, totalEditors: 10, totalViewers: 1185 },
  };
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome back, ${user?.name ?? "Guest"} 👋`}
        description="Manage your admin dashboard and settings"
      />
      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <StatsCard
            headerTitle="Total Users"
            value={dashboardData.totalUsers}
            currentMonth={dashboardData.usersJoined.thisMonth}
          />
          <StatsCard
            headerTitle="Users Joined"
            value={dashboardData.usersJoined.today}
            currentMonth={dashboardData.usersJoined.thisMonth}
          />
          <StatsCard
            headerTitle="Total Trips"
            value={dashboardData.totalTrips}
            currentMonth={dashboardData.tripsCreated.currentMonth}
          />
        </div>
      </section>

      <TripCard />

    </main>
  );
};

export default Dashboard;
