import TaskCard from "@/app/components/TaskCard/TaskCard";
import { TaskDocument } from "@/models/task";

const getExpiredTasks = async (): Promise<TaskDocument[]> => {
  const response = await fetch(`${process.env.API_URL}/tasks/expired`, {
    cache: "no-store",
  });

  if (response.status !== 200) {
    throw new Error();
  }

  const data = await response.json();
  return data.tasks as TaskDocument[];
};

const ExpiredTaskPage = async () => {
  const expiredTasks = await getExpiredTasks();
  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">Expired Tasks</h1>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        {expiredTasks.length !== 0 ? (
          expiredTasks.map((task) => (
            <TaskCard key={task._id as string} task={task} />
          ))
        ) : (
          <p className="text-blue-700 text-lg">期限切れタスクはありません。</p>
        )}
      </div>
    </div>
  );
};

export default ExpiredTaskPage;
