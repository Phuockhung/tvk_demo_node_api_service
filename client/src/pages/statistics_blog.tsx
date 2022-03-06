import { useSelector } from "react-redux";
import { RootStore } from "../utils/TypeScript";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { getRandomColor } from "../utils/Utils";
import { v4 as uuidv4 } from "uuid";

ChartJS.register(ArcElement, Tooltip, Legend);

const StatisticsBlog = () => {
  const { homeBlogs, categories } = useSelector((state: RootStore) => state);
  const dataCategoriesLabels: string[] = [];
  const dataNumberOfBlog: number[] = [];
  const dataDoughnutColor: string[] = [];
  const dataCategoriesEmptyBlog: string[] = [];
  homeBlogs.forEach((homeBlog, index) => {
    dataCategoriesLabels.push(homeBlog.name);
    dataNumberOfBlog.push(homeBlog.count);
    dataDoughnutColor.push(getRandomColor());
  });
  const dataChart = {
    labels: dataCategoriesLabels,
    datasets: [
      {
        label: "# of Blog",
        data: dataNumberOfBlog,
        backgroundColor: dataDoughnutColor,
      },
    ],
  };
  categories.forEach((category, index) => {
    if (dataCategoriesLabels.indexOf(category.name) === -1) {
      dataCategoriesEmptyBlog.push(category.name);
    }
  });

  return (
    <div className="container mt-4 mb-4">
      <div className="container-fluid pt-2 text-center">
        <h1>Statistics Blog</h1>
        <p></p>
      </div>
      <div className="row">
        <div className="col-sm-6 p-4">
          <Doughnut data={dataChart} />
        </div>
        <div className="col-sm-6 p-4">
          <h3 className="text-center">More information</h3>
          <ol className="list-group list-group-numbered">
            {homeBlogs.map((homeBlog) => (
              <div key={homeBlog._id}>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{homeBlog.name}</div>
                  </div>
                  <span className="badge bg-info rounded-pill">
                    {homeBlog.count}
                  </span>
                </li>
              </div>
            ))}
            {dataCategoriesEmptyBlog.map((homeBlog) => (
              <div key={uuidv4()}>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">{homeBlog}</div>
                  </div>
                  <span className="badge bg-warning rounded-pill">0</span>
                </li>
              </div>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default StatisticsBlog;
