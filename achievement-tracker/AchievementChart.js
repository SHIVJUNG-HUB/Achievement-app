import { Pie } from "react-chartjs-2";

export default function AchievementChart({ tasks }) {
  const completedTasks = tasks.filter(t => t.completed).length;
  const pendingTasks = tasks.length - completedTasks;

  const data = {
    labels: ["Completed", "Pending"],
    datasets: [{
      data: [completedTasks, pendingTasks],
      backgroundColor: ["#4CAF50", "#FF6384"],
    }],
  };

  return <Pie data={data} />;
}