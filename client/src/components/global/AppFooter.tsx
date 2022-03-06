import { Link } from "react-router-dom";

const AppFooter = () => {
  return (
    <div className="footer">
      <h6>Welcome my Blog</h6>
      <Link to={`/`} target="_blank" rel="noreferrer" className="mb-2 d-block">
        https://demo-blog-tvk.herokuapp.com/
      </Link>

      <div className="copyright">Copyright &copy; 2022</div>
    </div>
  );
};

export default AppFooter;
