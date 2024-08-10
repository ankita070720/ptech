import { Button } from "@mui/material";
import { BsBookmark, BsCalendar2Date } from "react-icons/bs";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import {

  SiCodeceptjs,

} from "react-icons/si";
import { Link, useLocation } from "react-router-dom";
const Blogs = () => {
  const location = useLocation();
  console.log(location);
  const query = new URLSearchParams(location.search);
  console.log(query);
  const page = parseInt(query.get('page') || '1', 10);
  console.log(page);
  return (
    <>
      <header className="container-fluid ks-page-header">
        <h1 className="display-4 text-white ks-page-title text-align-center">
          Blog 
        </h1>
      </header>
      <main className="container my-5 ks-article-content">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-9 content-primary">
            <div className="postWrapper">
              <div className="entryMeta">
                <span className="meta-item entry-published mr-1">
                  <BsCalendar2Date className="mr-1 ml-2" />
                  May 3, 2021{" "}
                </span>

                <span className="meta-item entry-published">
                  <BsBookmark className="mr-1 ml-2" />
                  UseForm
                </span>

                <span className="meta-item entry-tags">
                  <SiCodeceptjs className="mr-1 ml-2" />
                  React JS{" "}
                </span>
              </div>
              <div className="postDetails">
                <h3>UseForm React hooks for form validation</h3>
                <p>
                  useForm is a custom hook for managing forms with ease. It
                  takes one object as optional argument. The following example
                  demonstrates all of its properties along with their default
                  values.
                </p>
                <Button>
                  <Link to="#">Read More</Link>
                </Button>
              </div>
            </div>

            <div className="postWrapper">
              <div className="entryMeta">
                <span className="meta-item entry-published mr-1">
                  <BsCalendar2Date className="mr-1 ml-2" />
                  May 3, 2021{" "}
                </span>

                <span className="meta-item entry-published">
                  <BsBookmark className="mr-1 ml-2" />
                  UseForm
                </span>

                <span className="meta-item entry-tags">
                  <SiCodeceptjs className="mr-1 ml-2" />
                  Angular 17
                </span>
              </div>
              <div className="postDetails">
                <h3>
                  The best new features in Angular 17: A kinder, faster Angular
                </h3>
                <p>
                  Angular is one of the most storied front-end web frameworks,
                  and it has gone through significant changes since its initial
                  release—including the complete rewrite that transformed it
                  into a reactive framework in the vein of React. Angular today
                  is a powerful system with some great ideas, like reactive
                  eventing throughout and a robust dependency injection system.
                  This article is an overview of improved features in Angular
                  17.
                </p>
                <Button>
                  <Link to="#">Read More</Link>
                </Button>
              </div>
            </div>
            <div className="paginationPost">
            <Pagination
      page={page}
      count={10}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          to={`/blogs${item.page === 1 ? '' : `?page=${item.page}`}`}
          {...item}
        />
      )}
    />
            </div>
      
          </div>
          <div
            id="sidebar"
            className="col-12 col-md-3 col-lg-3 content-secondary site-sidebar"
          >
            <div className="container">
              <div className="row">
                <div className="sidePostView">
                  <form>
                    <input type="text" placeholder="search here" />
                  </form>
                  <div className="widgetPopularPost">
                    <div className="widgetTitle">Popular Post</div>
                    <div className="widgetBody">
                      <div className="widgetPost">
                        <article className="widgetPostDetails d-flex align-items-center">
                          <Link to="#">
                            UseForm React hooks for form validation
                          </Link>
                        </article>
                        <article className="widgetPostDetails d-flex align-items-center">
                          <Link to="#">
                            Best Resume Writing Services for 2024
                          </Link>
                        </article>
                        <article className="widgetPostDetails d-flex align-items-center">
                          <Link to="#">
                            Job interviews: questions and answers, how to
                            prepare and more tips from the Global Managing
                            Director of Reed
                          </Link>
                        </article>
                        <article className="widgetPostDetails d-flex align-items-center">
                          <Link to="#">
                            The best new features in Angular 17: A kinder,
                            faster Angular
                          </Link>
                        </article>
                      </div>
                    </div>
                  </div>
                  <div className="tags">
                   <h3>TAGS</h3> 
                   <div className="widgetTags">
                    <Link to="#">React.js</Link>
                    <Link to="#">Javascript</Link>
                    <Link to="#">Angular</Link>
                    <Link to="#">HTML5/CSS3</Link>
                    <Link to="#">GIT</Link>
                    <Link to="#">Interview tips & tricks</Link>
                    <Link to="#">CI/CD</Link>
                    <Link to="#">Next.js</Link><Link to="#">React.js</Link>
                    <Link to="#">Java</Link><Link to="#">React.js</Link><Link to="#">React.js</Link><Link to="#">React.js</Link>
                   </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default Blogs;
